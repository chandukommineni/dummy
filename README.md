# dummy

Tiny sandbox repo for exercising the self-healing CI/CD workflow.

## Local

```bash
pnpm install
pnpm test
```

## Demo loop

1. Push a commit that breaks a test (e.g. flip an expectation in `src/utils.test.ts`).
2. CI fails on `main`.
3. Trigger the `self-healing-ci` workflow against `https://github.com/chandukommineni/dummy`.
4. Agent fetches the failed run logs, diagnoses, raises a fix PR.
