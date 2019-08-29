
import React, { Suspense } from 'react'

console.log('Module1')

const InnerComponent = React.lazy(() => import('./component1'));
const Component = () => 
    <Suspense fallback={() => <p>Loading</p>}>
        <InnerComponent />
    </Suspense>

export const id = 'module-v1.0'
export const name = 'First Module'
export const version = '1.0'

console.log(Component)
