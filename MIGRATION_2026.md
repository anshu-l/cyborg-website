# IEEE 2026 Migration Runbook

## Objective
Consolidate content updates from IEEE-Main into ieee.iiitd.edu.in while keeping the target design and theme intact.

## Scope
- Migrate latest-team members roster data.
- Migrate required member image assets referenced by the latest-team roster.
- Keep existing target UI/theme and page structure unchanged.
- Keep Sanity backend unchanged (both repos already use the same project and dataset).

## Current Status (April 11, 2026)
- Members data migrated from source to target.
- Member assets copied for all referenced image paths.
- Build validated successfully in target web app.
- Validation shows zero missing assets for current members data.

## Safe Re-run Commands
Run from repository root:

```powershell
pwsh -File .\scripts\migrate-members-from-source.ps1
pwsh -File .\scripts\validate-members-assets.ps1
```

If source path differs:

```powershell
pwsh -File .\scripts\migrate-members-from-source.ps1 -SourceRepoRoot "C:\Path\To\IEEE-Main"
```

If you intentionally want source files to overwrite different target files with same names:

```powershell
pwsh -File .\scripts\migrate-members-from-source.ps1 -OverwriteExisting
```

## Rollback
Each migration run creates a backup snapshot under:
- migration-backups/members-<timestamp>/members.target.before.json

Rollback members data:

```powershell
Copy-Item ".\migration-backups\members-<timestamp>\members.target.before.json" ".\web\src\data\members.json" -Force
```

After rollback:

```powershell
pwsh -File .\scripts\validate-members-assets.ps1
cd .\web
yarn build
```

## Next 2026 Revamp Steps
1. Move members data from local JSON to Sanity-managed schema.
2. Add content QA checks to CI before deploy.
3. Add analytics tracking for join/apply funnel and event/blog engagement.
4. Archive IEEE-Main as read-only after final sign-off.
