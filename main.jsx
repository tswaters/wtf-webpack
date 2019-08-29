import React from 'react'
import { render } from 'react-dom'
import configStore from './store'

console.log('App')

const App = () => <h1>Hello World!</h1>

const store = configStore()
console.log(store)

render(
    <App />,
    document.getElementById('main'),
)
