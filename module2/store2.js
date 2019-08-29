import { createSelector } from 'reselect'

const INCREMENT_COUNT = '@@store2/INCREMENT_COUNT'
export function incrementCount() {
  return { type: INCREMENT_COUNT }
}

const DECREMENT_COUNT = '@@store2/DECREMENT_COUNT'
export function decrementCount() {
  return { type: DECREMENT_COUNT }
}

export const getCount = createSelector(
  (state) => {
    if (state.store1) return state.store1.count
    return 0
  },
  count => count,
)

export const key = 'store2'
const inintialState = { count: 0 }

export default (state = inintialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { count: state.count + 1 }
    case DECREMENT_COUNT:
      return { count: state.count - 1 }
  }
  return state
}
