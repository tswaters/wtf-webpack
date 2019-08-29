import { createSelector } from 'reselect'
import { StoreState } from '../store'

const INCREMENT_COUNT = '@@store2/INCREMENT_COUNT'
type INCREMENT_COUNT = typeof INCREMENT_COUNT
type IncrementCountAction = { type: INCREMENT_COUNT }
export function incrementCount(): IncrementCountAction {
  return { type: INCREMENT_COUNT }
}

const DECREMENT_COUNT = '@@store2/DECREMENT_COUNT'
type DECREMENT_COUNT = typeof DECREMENT_COUNT
type DecrementCountAction = { type: DECREMENT_COUNT }
export function decrementCount(): DecrementCountAction {
  return { type: DECREMENT_COUNT }
}

export const getCount = createSelector(
  (state: StoreState) => {
    if (state.store2) return state.store2.count
    return 0
  },
  count => count,
)

export type Actions = IncrementCountAction | DecrementCountAction

export type Store = {
  count: number
}

export const key = 'store2'
const inintialState: Store = { count: 0 }

export default (state: Store = inintialState, action: Actions): Store => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { count: state.count + 1 }
    case DECREMENT_COUNT:
      return { count: state.count - 1 }
  }
  return state
}
