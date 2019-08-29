
import React, { Suspense, FC } from 'react'
import { Route, Link } from 'react-router-dom'

console.log('Module1')

const InnerComponent = React.lazy(() => import('./component1'));
const Component: FC = () => 
    <Suspense fallback={() => <p>Loading</p>}>
        <InnerComponent />
    </Suspense>

export const id = 'module-v1.0'
export const name = 'First Module'
export const longName = 'Allows management of customers'
export const version = '1.0'

const menus = [
    <Link key={`${name}-${version}`} to={'/module1'}>
        {name}
    </Link>,
]

const routes = [
    <Route key={`${name}-${version}`} path="/module1" component={Component} />,
]

if (window.inject) window.inject({ id, name, longName, version, routes, menus })
