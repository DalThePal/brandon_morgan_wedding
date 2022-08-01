import React from 'react'
import { useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

import cloudTexture from 'images/cloud.png'

const Cloud = ({ position }) => {

  const texture = useTexture(cloudTexture)

  return (
    <mesh position={position} arg={[100, 100]}>
      <planeGeometry/>
      <meshStandardMaterial 
        map={texture}
        transparent
      />
    </mesh>
  )
}

export default Cloud
