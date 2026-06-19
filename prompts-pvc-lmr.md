# Prompt: Apply "PVC to stg and prod only" deployment change to another service

## Goal
Update the service deployment pipeline and deploy script so that Redis persistent volume claims (PVCs) are only created for **staging** and **production**, and are **not** created for **dev**, **branch**, or **uat** environments unless explicitly required.

## Context
This change is based on the pattern used in:
- PR: https://github.com/UKHomeOffice/rotm/pull/360
- Title: `ROTM-112-PVC to stg and prod only`

## Expected behaviour
Implement the following rules:

- **Production**
  - Redis persistence must be enabled.
  - PVC must be created.
  - Redis persistence size must be `10Gi`.

- **Staging**
  - Redis persistence must be enabled.
  - PVC must be created.
  - Redis persistence size must be `1Gi`.

- **All other environments** (for example `dev`, `branch`, `uat`)
  - Redis persistence must be disabled.
  - PVC must **not** be created.
  - Redis should still deploy, but without persistent storage.

## Required code changes

### 1. Update pipeline configuration
In the CI/CD pipeline file (for example `.drone.yml`, or equivalent):
- Remove Redis persistence environment variables from the **development** deployment step if they currently force PVC creation there.
- Ensure production explicitly uses `REDIS_PERSISTENCE_ENABLED="true"` and `REDIS_PERSISTENCE_SIZE="10Gi"`.
- If staging has environment-specific overrides, ensure they align with the desired behaviour above.

### 2. Refactor deploy script
In the deploy script (for example `bin/deploy.sh`, or equivalent):

#### Add helper functions
Create helper functions similar to:

- `deploy_redis()`
  - Create the Redis PVC manifest **only if**:
    - `REDIS_PERSISTENCE_ENABLED == "true"`
    - and `REDIS_PERSISTENCE_EXISTING_CLAIM` is empty
  - Always deploy Redis runtime resources:
    - service
    - network policy
    - deployment/statefulset as appropriate

- `delete_redis()`
  - Delete the Redis PVC manifest only under the same condition.
  - Always delete the Redis runtime resources.

#### Normalize environment variables
Ensure the script safely initializes these variables with defaults:
- `REDIS_PERSISTENCE_ENABLED`
- `REDIS_PERSISTENCE_ACCESS_MODES`
- `REDIS_PERSISTENCE_STORAGE_CLASS`
- `REDIS_PERSISTENCE_EXISTING_CLAIM`

Convert `REDIS_PERSISTENCE_ENABLED` to lowercase before use.

#### Set environment-specific persistence rules
Replace any generic/default persistence logic with explicit environment rules:

- If namespace/environment is `PROD_ENV`
  - `REDIS_PERSISTENCE_ENABLED=true`
  - `REDIS_PERSISTENCE_SIZE=10Gi`

- Else if namespace/environment is `STG_ENV`
  - `REDIS_PERSISTENCE_ENABLED=true`
  - `REDIS_PERSISTENCE_SIZE=1Gi`

- Else
  - `REDIS_PERSISTENCE_ENABLED=false`

#### Replace direct Redis manifest deployment
Where the script currently does things like:
- deploy all of `kube/redis`
- deploy a separate PVC file directly
- deploy Redis storage/runtime files via variables

replace that with calls to:
- `deploy_redis`
- `delete_redis`

This should be applied consistently across:
- branch teardown
- branch deploy
- uat deploy
- staging deploy
- production deploy

## Important implementation details
- Do **not** create a PVC when persistence is disabled.
- Do **not** create a PVC when an existing claim is provided via `REDIS_PERSISTENCE_EXISTING_CLAIM`.
- Redis runtime resources should still be deployed even when PVC creation is skipped.
- Keep the change minimal and focused on Redis persistence behaviour.
- Preserve existing deployment behaviour for unrelated components.

## Files likely to change
Typical files:
- `.drone.yml`
- `bin/deploy.sh`

## Example summary of the original change
The original PR made two main changes:

1. **Pipeline change**
   - Removed dev-specific Redis persistence environment variables.
   - Increased production Redis persistence size from `5Gi` to `10Gi`.

2. **Deploy script change**
   - Introduced `deploy_redis()` and `delete_redis()` helper functions.
   - Replaced unconditional Redis/PVC deployment with conditional logic.
   - Made Redis PVC creation staging-and-production only.

## Acceptance criteria
- Dev deploy does not create a Redis PVC.
- Branch deploy does not create a Redis PVC.
- UAT deploy does not create a Redis PVC.
- Staging deploy creates a Redis PVC sized `1Gi`.
- Production deploy creates a Redis PVC sized `10Gi`.
- Teardown only deletes PVCs when they were conditionally created by persistence-enabled environments.
- Redis service/network/deployment still deploy in all required environments.

## Suggested implementation prompt
Use this prompt with an engineer or coding agent:

> Update this service so Redis PVCs are only created in staging and production. Refactor the deploy script to introduce conditional `deploy_redis` and `delete_redis` helper functions, normalize Redis persistence environment variables, and enforce:
> - prod => persistence enabled, size 10Gi
> - stg => persistence enabled, size 1Gi
> - all other envs => persistence disabled
>
> Also update the pipeline config to remove dev-specific persistence overrides and ensure production uses 10Gi. Keep Redis runtime resources deploying normally even when PVC creation is skipped.
> in redis deployment I want   strategy:
    type: Recreate

# ensure

StorageClasses is gp2-encrypted

# in the redis deployment
    spec:
      securityContext:
        fsGroup: 999
