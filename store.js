import { combineReducers, createStore, } from 'redux'

console.log('store.ts')

export default function configStore(state) {
  return createStore(
    combineReducers({
      dummy: (_state = null) => _state
    }),
    state && state
  )
}
