param(
    [string]$RepoRoot = (Split-Path -Parent $PSScriptRoot)
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$membersPath = Join-Path $RepoRoot "web\src\data\members.json"
$peopleRoot = Join-Path $RepoRoot "web\public\people"

if (-not (Test-Path $membersPath)) {
    throw "members.json not found at $membersPath"
}

if (-not (Test-Path $peopleRoot)) {
    throw "people asset directory not found at $peopleRoot"
}

$membersData = Get-Content $membersPath -Raw | ConvertFrom-Json
$missingAssets = New-Object System.Collections.Generic.List[string]
$invalidPaths = New-Object System.Collections.Generic.List[string]
$uniqueAssetRefs = New-Object System.Collections.Generic.HashSet[string]
$totalImageRefs = 0

foreach ($team in $membersData) {
    foreach ($member in $team.members) {
        $imgPath = [string]$member.img

        if ([string]::IsNullOrWhiteSpace($imgPath)) {
            continue
        }

        $totalImageRefs++

        if (-not $imgPath.StartsWith("/people/")) {
            $invalidPaths.Add("$($member.name):$imgPath")
            continue
        }

        $relativePath = $imgPath.Substring(8).Replace("/", "\")
        [void]$uniqueAssetRefs.Add($relativePath)

        $resolvedPath = Join-Path $peopleRoot $relativePath
        if (-not (Test-Path $resolvedPath)) {
            $missingAssets.Add("$($member.name):$imgPath")
        }
    }
}

Write-Host "Validated file: $membersPath"
Write-Host "Total image refs: $totalImageRefs"
Write-Host "Unique image refs: $($uniqueAssetRefs.Count)"
Write-Host "Invalid img paths: $($invalidPaths.Count)"
Write-Host "Missing assets: $($missingAssets.Count)"

if ($invalidPaths.Count -gt 0) {
    Write-Host "--- Invalid img paths (must start with /people/) ---"
    $invalidPaths | Sort-Object | ForEach-Object { Write-Host $_ }
}

if ($missingAssets.Count -gt 0) {
    Write-Host "--- Missing assets ---"
    $missingAssets | Sort-Object | ForEach-Object { Write-Host $_ }
    exit 1
}

Write-Host "Asset validation passed."
