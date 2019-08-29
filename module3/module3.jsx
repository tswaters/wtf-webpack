
import React, { Suspense } from 'react'

console.log('Module3')

const InnerComponent = React.lazy(() => import('./component3'));
const Component = () => 
    <Suspense fallback={() => <p>Loading</p>}>
        <InnerComponent />
    </Suspense>

export const id = 'module-v3.0'
export const name = 'Third Module'
export const version = '3.0'

console.log(Component)
