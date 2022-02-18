import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

import Model from './model'

const Diamond = () => {
  return (
    <Suspense fallback={<div/>}>
      <Canvas dpr={1}>
        <Model/>
        <OrbitControls/>
        <Environment preset="sunset"/>
      </Canvas>
    </Suspense>
  )
}

export default Diamond
