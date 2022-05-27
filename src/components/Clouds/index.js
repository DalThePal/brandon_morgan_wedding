import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Group from './Group'

const Clouds = () => {

  return (
    <Canvas camera={{ position: [0, 0, 16], fov: 75 }}>
      <ambientLight intensity={0.8} />
      <Suspense fallback={null}>
        <Group/>
      </Suspense>
    </Canvas>
  )
}

export default Clouds

