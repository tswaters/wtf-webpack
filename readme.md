
# webpack issue - some async chunks aren't loaded


## setup

```
npm ci
npm run build
```

Open `dist/index.html` in a browser. `Hello World` is displayed,  the following console outputs are logged:

```
store.ts
App
Object { dispatch: dispatch(), subscribe: subscribe(), getState: getState(), replaceReducer: replaceReducer(), Symbol(observable): observable() }
Module1
function Component()
Module2
function Component()
Module3
function Component()
```

## breaking it

run the following:

```
git apply break-it.patch
```

Open `dist/index.html` in a browser. `Hello world` is **not** displayed, the following console outputs are logged:

```
Module1
function Component()
Module2
function Component()
Module3
function Component()
```

i.e., App is never run.