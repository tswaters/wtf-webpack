
import React, { Suspense } from 'react'

console.log('Module2')

const InnerComponent = React.lazy(() => import('./component2'));
const Component = () => 
    <Suspense fallback={() => <p>Loading</p>}>
        <InnerComponent />
    </Suspense>

export const id = 'module-v2.0'
export const name = 'Second Module'
export const version = '1.0'

console.log(Component)
