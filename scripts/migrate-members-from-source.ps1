param(
    [string]$SourceRepoRoot = "C:\Code\01_full_stack\IEEE-Main",
    [string]$TargetRepoRoot = (Split-Path -Parent $PSScriptRoot),
    [string]$BackupStamp = (Get-Date -Format "yyyy-MM-dd-HHmmss"),
    [switch]$OverwriteExisting
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$sourceMembersPath = Join-Path $SourceRepoRoot "web\src\data\members.json"
$targetMembersPath = Join-Path $TargetRepoRoot "web\src\data\members.json"
$sourcePeopleRoot = Join-Path $SourceRepoRoot "web\public\people"
$targetPeopleRoot = Join-Path $TargetRepoRoot "web\public\people"
$backupRoot = Join-Path $TargetRepoRoot "migration-backups\members-$BackupStamp"

if (-not (Test-Path $sourceMembersPath)) {
    throw "Source members file not found at $sourceMembersPath"
}

if (-not (Test-Path $targetMembersPath)) {
    throw "Target members file not found at $targetMembersPath"
}

if (-not (Test-Path $sourcePeopleRoot)) {
    throw "Source people folder not found at $sourcePeopleRoot"
}

if (-not (Test-Path $targetPeopleRoot)) {
    throw "Target people folder not found at $targetPeopleRoot"
}

New-Item -ItemType Directory -Path $backupRoot -Force | Out-Null
Copy-Item $targetMembersPath (Join-Path $backupRoot "members.target.before.json") -Force
Copy-Item $sourceMembersPath (Join-Path $backupRoot "members.source.snapshot.json") -Force

$sourceMembers = Get-Content $sourceMembersPath -Raw | ConvertFrom-Json
$assetRefs = New-Object System.Collections.Generic.HashSet[string]

foreach ($team in $sourceMembers) {
    foreach ($member in $team.members) {
        $imgPath = [string]$member.img
        if ([string]::IsNullOrWhiteSpace($imgPath)) {
            continue
        }

        if (-not $imgPath.StartsWith("/people/")) {
            Write-Host "Skipping non-people path: $imgPath"
            continue
        }

        [void]$assetRefs.Add($imgPath.Substring(8).Replace("/", "\"))
    }
}

$copied = 0
$updated = 0
$already = 0
$missingInSource = 0

foreach ($assetRef in $assetRefs) {
    $sourceFile = Join-Path $sourcePeopleRoot $assetRef
    $targetFile = Join-Path $targetPeopleRoot $assetRef

    if (-not (Test-Path $sourceFile)) {
        $missingInSource++
        Write-Host "Missing in source: $assetRef"
        continue
    }

    New-Item -ItemType Directory -Path (Split-Path $targetFile -Parent) -Force | Out-Null

    if (-not (Test-Path $targetFile)) {
        Copy-Item $sourceFile $targetFile -Force
        $copied++
        continue
    }

    $sourceHash = (Get-FileHash $sourceFile -Algorithm SHA256).Hash
    $targetHash = (Get-FileHash $targetFile -Algorithm SHA256).Hash

    if ($sourceHash -eq $targetHash) {
        $already++
        continue
    }

    if ($OverwriteExisting.IsPresent) {
        Copy-Item $sourceFile $targetFile -Force
        $updated++
    }
}

Copy-Item $sourceMembersPath $targetMembersPath -Force

$validatorScript = Join-Path $PSScriptRoot "validate-members-assets.ps1"
& $validatorScript -RepoRoot $TargetRepoRoot
if ($LASTEXITCODE -ne 0) {
    throw "Validation failed after migration."
}

Write-Host "--- Migration Summary ---"
Write-Host "Backup directory: $backupRoot"
Write-Host "Unique image refs: $($assetRefs.Count)"
Write-Host "Copied new files: $copied"
Write-Host "Updated existing files: $updated"
Write-Host "Already identical: $already"
Write-Host "Missing in source: $missingInSource"
Write-Host "OverwriteExisting used: $($OverwriteExisting.IsPresent)"
