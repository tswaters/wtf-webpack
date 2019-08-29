import {
    combineReducers,
    createStore,
    applyMiddleware,
    Reducer,
    Store,
  } from 'redux'
  import thunk, { ThunkMiddleware, ThunkAction, ThunkDispatch } from 'redux-thunk'
  import { eventName, Item } from './module-injection'
  
  import { Store as Store1, Actions as Store1Actions, key as Store1Key, } from './module1/store1'
  import { Store as Store2, Actions as Store2Actions, key as Store2Key, } from './module2/store2'
  import { Store as Store3, Actions as Store3Actions, key as Store3Key, } from './module3/store3'

  console.log('store.ts')
  export type Actions = Store1Actions | Store2Actions | Store3Actions
  
  export type StoreState = {
    [Store1Key]?: Store1
    [Store2Key]?: Store2
    [Store3Key]?: Store3
  }
  
  type ItemReducer = {
    key: string
    reducer: Reducer
  }
  
  let store: Store | null = null
  const addedReducers: ItemReducer[] = []
  
  export type ThunkResult<R> = ThunkAction<R, Store, null, Actions>
  export type ThunkDispatch = ThunkDispatch<Store, null, Actions>
  
  const createReducer = (additional: ItemReducer[]): Reducer =>
    combineReducers({  
      ...additional.reduce(
        (memo, item) => ({ ...memo, [item.key]: item.reducer }),
        {},
      ),
    })
  
  export default function configStore(state?: object): Store {
    const middleware = []
    middleware.push(thunk as ThunkMiddleware<Store, Actions>)
  
    store = createStore(
      createReducer(addedReducers),
      state && state,
      applyMiddleware(...middleware),
    )
  
    return store
  }
  
  window.addEventListener(eventName, (item: CustomEvent<Item>) => {
    const { reducer, reducerKey: key } = item.detail
    if (!reducer || !key) return
  
    addedReducers.push({ key, reducer })
  
    if (store) {
      store.replaceReducer(createReducer(addedReducers))
    }
  })
  