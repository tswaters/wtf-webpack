
import React, { Suspense } from 'react'
import { Route, Link } from 'react-router-dom'

console.log('Module2')

const InnerComponent = React.lazy(() => import('./component2'));
const Component = () => 
    <Suspense fallback={() => <p>Loading</p>}>
        <InnerComponent />
    </Suspense>

export const id = 'module-v2.0'
export const name = 'Second Module'
export const version = '1.0'

const menus = [
    <Link key={`${name}-${version}`} to={'/module2'}>
        {name}
    </Link>,
]

const routes = [
    <Route key={`${name}-${version}`} path="/module2" component={Component} />,
]

if (window.inject) window.inject({ id, name, version, routes, menus })
