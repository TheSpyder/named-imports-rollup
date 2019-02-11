Named imports and tree shaking
==============================

Demonstrating that `import * as name from ...` style named imports are tree shaken by Rollup.

Info
----
`index.mjs` is the entry point, which imports `arr.mjs`. It can be executed by nodejs to demonstrate that it works. With rollup, only the `range` method of `arr.mjs` is included in the output.

Usage
-----

* `yarn`
* `yarn run` to show the code works
* `yarn build && cat scratch/index.js` to see `ronge` is tree shaken out

uncomment the last line of `index.mjs` and rebuild to see `ronge` _is_ imported.

Credits
-------

`Arr.range` implementation borrowed from [katamari](https://github.com/ephox/katamari/blob/master/src/main/ts/ephox/katamari/api/Arr.ts#L39) which is Apache licensed

License
-------
Do whatever you want 🤷‍♂️
