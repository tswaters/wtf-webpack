import { combineReducers, createStore, } from 'redux'

console.log('store.ts')

export default function configStore(state) {
  return createStore(
    combineReducers({
      dummy: state => state
    }),
    state && state
  )
}
