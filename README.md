# SauceDemo Playwright + TypeScript + Cucumber BDD

Portfolio automation framework for [SauceDemo](https://www.saucedemo.com/). This project is separate from any step-by-step learning repository.

## Stack
- Playwright browser automation + TypeScript
- Cucumber BDD with Gherkin scenarios and Scenario Outline
- Page Object Model (POM), isolated browser contexts, hooks, reusable test data
- Smoke/regression tags, HTML/JSON reports, failure screenshots
- GitHub Actions CI

## Run locally
Requires Node.js 20+.

```bash
npm ci
npx playwright install chromium
npm run typecheck
npm test
npm run test:smoke
```

For visible browser runs: `HEADED=true npm test` (PowerShell: `$env:HEADED='true'; npm test`).

Reports are generated under `reports/` and ignored by Git. GitHub Actions uploads them as artifacts.

## Project structure
- `features/`: human-readable BDD scenarios
- `src/steps/`: Gherkin step definitions
- `src/pages/`: Page Object Model
- `src/support/`: Cucumber World and browser lifecycle hooks
- `src/data/`: demo test accounts

## Notes
SauceDemo credentials are publicly documented demo accounts, not personal secrets. The framework is intended for portfolio demonstration. Review and run it yourself before describing it as your work. No claim is made that tests have been verified against the live website in this package.
