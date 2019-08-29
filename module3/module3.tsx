
import React, { Suspense, FC } from 'react'
import { Route, Link } from 'react-router-dom'

console.log('Module3')

const InnerComponent = React.lazy(() => import('./component3'));
const Component: FC = () => 
    <Suspense fallback={() => <p>Loading</p>}>
        <InnerComponent />
    </Suspense>

export const id = 'module-v3.0'
export const name = 'Third Module'
export const longName = 'Allows management of customers'
export const version = '3.0'

const menus = [
    <Link key={`${name}-${version}`} to={'/module3'}>
        {name}
    </Link>,
]

const routes = [
    <Route key={`${name}-${version}`} path="/module3" component={Component} />,
]

if (window.inject) window.inject({ id, name, longName, version, routes, menus })
