# Contributing to DataCube Solutions

We welcome contributions from the community. Please follow these guidelines to ensure a smooth development process.

## Branching Strategy

We use a Trunk-Based Development model with a `main` branch. Here's how it works:

- **`main` branch:** This is the main branch of the repository. It should always be in a deployable state.
- **Feature branches:** All new features should be developed in a feature branch. Feature branches should be created from the `main` branch and named using the following convention: `feature/<jira-ticket>` (e.g., `feature/ABC-123`).
- **Short-lived branches:** Feature branches should be short-lived. They should be merged back into `main` as frequently as possible to avoid drift.
- **Feature flags:** Use feature flags to hide incomplete features in the `main` branch. This allows us to deploy the `main` branch to production at any time, even if it contains incomplete features.
- **`dev` branch (optional):** We may occasionally use a `dev` branch for integration testing of combined features before pushing to `main`. In this case, feature branches are merged into `dev` first, and then `dev` is merged into `main` after verification.
- **Release branches:** When we are ready to release a new version of the platform, we will create a release branch from `main`. Release branches are named using the following convention: `release/vX.Y.Z`. No new features should be added to a release branch. Only bug fixes and other release-critical changes are allowed. Once the release is complete, the release branch is merged back into `main` and tagged.
- **Hotfix branches:** If we need to fix a critical bug in production, we will create a hotfix branch from `main`. Hotfix branches are named using the following convention: `hotfix/<issue>`. Hotfix branches are merged back into `main` and `dev` (if it exists) as soon as the fix is complete.

## Pull Requests

- All pull requests must be reviewed and approved by at least one other developer before they can be merged.
- All pull requests must pass the CI/CD pipeline before they can be merged.
- Pull requests should be small and focused on a single feature or bug fix.
- Pull requests should include a clear and concise description of the changes.
- Pull requests should be linked to the relevant Jira ticket.
