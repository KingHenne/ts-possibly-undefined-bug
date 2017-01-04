## Example for the TypeScript bug `Object is possibly 'undefined'`

### How to reproduce

```shell
npm install
npm run test
```

This results in an unexpected compiler error:

```shell
index.ts(4,21): error TS2532: Object is possibly 'undefined'.
```
