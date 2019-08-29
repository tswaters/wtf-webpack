import { combineReducers, createStore, applyMiddleware, } from 'redux'
import thunk  from 'redux-thunk'
import { eventName } from './module-injection'

console.log('store.ts')

let store = null
const addedReducers = []

const createReducer = (additional) =>
  combineReducers({  
    ...additional.reduce(
      (memo, item) => ({ ...memo, [item.key]: item.reducer }),
      {},
    ),
  })

export default function configStore(state) {
  const middleware = []
  middleware.push(thunk)

  store = createStore(
    createReducer(addedReducers),
    state && state,
    applyMiddleware(...middleware),
  )

  return store
}

window.addEventListener(eventName, (item) => {
  const { reducer, reducerKey: key } = item.detail
  if (!reducer || !key) return

  addedReducers.push({ key, reducer })

  if (store) {
    store.replaceReducer(createReducer(addedReducers))
  }
})
