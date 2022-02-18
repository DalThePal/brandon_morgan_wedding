import React, { useRef, useEffect } from 'react'

import { useLoader, useThree, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

import model from 'models/Diamond-Model-Only.gltf'
import { MeshBasicMaterial } from 'three'

const Model = () => {

  const group = useRef()
  const { camera } = useThree()

  const { nodes, materials } = useGLTF(model)

  console.log(nodes)
  console.log(materials[''])

  camera.position.set(-3,44,89)

  return (
    <group ref={group} dispose={null}>
      <mesh
        geometry={nodes.Diamond_1.geometry}
        material={materials['']}
      />
    </group>
  )
}

export default Model

useGLTF.preload(model)
