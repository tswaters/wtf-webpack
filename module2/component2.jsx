
import React, { useCallback } from 'react'
// import { useSelector, useDispatch, connect } from 'react-redux';

console.log('Component2')

const connect = () => {}
const useSelector = () => {}
const useDispatch = () => {}

import { incrementCount, decrementCount, getCount } from './store2'
import { name, version } from './module2'

const Component = () => {
  
    const dispatch = useDispatch()
    const increment = useCallback(() => dispatch(incrementCount()), [dispatch])
    const decrement = useCallback(() => dispatch(decrementCount()), [dispatch])
    const count = useSelector(getCount)

    return (
        <div>
            <h2>{name}</h2>
            What is the current count: {count}
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <br /> version: {version}
        </div>        
    )
}

export default connect()(Component)
