
import React, { FC, useCallback } from 'react'
 import { useSelector, useDispatch, connect } from 'react-redux';

console.log('component1')

// const connect = ():any => {}
// const useSelector = (x:any) => {}
// const useDispatch = ():any => {}

import { incrementCount, decrementCount, getCount } from './store1'
import { name, longName, version } from './module1'

const Component: FC = () => {
  
    const dispatch = useDispatch()
    const increment = useCallback(() => dispatch(incrementCount()), [dispatch])
    const decrement = useCallback(() => dispatch(decrementCount()), [dispatch])
    const count = useSelector(getCount)

    return (
        <div>
            <h2>{name}</h2>
            <p>{longName}</p>
            How many widgets we&apos;ve sold: {count}
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <br /> version: {version}
        </div>        
    )
}

export default connect()(Component)
