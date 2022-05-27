import React, { useEffect, useRef, useState } from 'react'
import gsap, { ScrollTrigger } from 'gsap/all'
import { Cloud } from '@react-three/drei'

gsap.registerPlugin(ScrollTrigger)

const CLOUD_OPTIONS = {
  opacity: 0.5, 
  speed: 0.3, 
  width: 10,
  depth: 0.3,
  segments: 25,
}

const Group = () => {

  const [ group, setGroup ] = useState(null)

  useEffect(() => {
    if (group) {
      gsap.fromTo(group.position, {
        y: '-100'
      }, {
        delay: 1,
        duration: 1,
        y: '0'
      })
    }
  }, [group])

  useEffect(() => {
    if (group) {
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: '.smooth-scroll',
          trigger: '.smooth-scroll',
          start: "top top",
          end: "top+=1600 top",
          scrub: true
        }
      })

      tl.to(group.position, {
        y: 55
      }, 0)

      return () => {
        tl.kill()
      }
    }
  }, [group])

  return (
    <group ref={ref => setGroup(ref)}>
      <Cloud 
        position={[0, -20, 0]} 
        {...CLOUD_OPTIONS}
      />
      <Cloud 
        position={[15, -20, 0]} 
        {...CLOUD_OPTIONS}
      />
      <Cloud 
        position={[-15, -20, 0]} 
        {...CLOUD_OPTIONS}
      />
      <Cloud 
        position={[5, -20, -5]} 
        {...CLOUD_OPTIONS}
      />
      <Cloud 
        position={[-5, -20, -5]} 
        {...CLOUD_OPTIONS}
      />
      <Cloud 
        position={[25, -20, -2]} 
        {...CLOUD_OPTIONS}
      />
      <Cloud 
        position={[-25, -20, -2]} 
        {...CLOUD_OPTIONS}
      />
      <Cloud 
        position={[20, -20, -5]} 
        {...CLOUD_OPTIONS}
      />
      <Cloud 
        position={[-20, -20, -5]} 
        {...CLOUD_OPTIONS}
      />
    </group>
  )
}

export default Group
