import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { useModuleInjection } from './module-injection'
import { BrowserRouter as Router } from 'react-router-dom'
import configStore from './store'

console.log('App')

const store = configStore()

const App = () => {
    const items = useModuleInjection()
    
    const menus = items.reduce(
        (memo, item) => [
            ...memo,
            ...item.menus.map(menu => (
            <li id={item.id} key={item.id}>
                {menu}
            </li>
            )),
        ],
        [],
    )

    const routes = items.reduce((memo, item) => [...memo, ...item.routes], [])

    return (
        <div className="App">
        <Provider store={store}>
            <Router>
                <h1>Chooser</h1>
                <ul>{menus}</ul>
                <div>{routes}</div>
            </Router>
        </Provider>
        </div>
    )
}

render(
    <App />,
    document.getElementById('main'),
)
