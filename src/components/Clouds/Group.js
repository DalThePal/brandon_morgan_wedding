import React, { useEffect, useRef, useState } from 'react'
import gsap, { ScrollTrigger } from 'gsap/all'
// import { Cloud } from '@react-three/drei'
import Cloud from './Cloud'

gsap.registerPlugin(ScrollTrigger)

const CLOUD_OPTIONS = {
  opacity: 0.5, 
  speed: 0.3, 
  width: 10,
  depth: 0.3,
  segments: 25,
  dimensions: {
    width: 100,
    height: 100
  }
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
        y: 5
      })
    }
  }, [group])

  useEffect(() => {
    if (group) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#scroll-wrapper',
          start: "top top",
          end: `top+=${window.innerHeight * 2.5} top`,
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

  // useEffect(() => {
  //   if (group) {
  //     setInterval(() => {
  //       Array.from(group.children).forEach((cloud) => {
  //         console.log(cloud)
  //         if (cloud.position.z > 10) {
  //           Array.from(cloud.children[0].children).forEach((segment) => {
  //             gsap.to(segment.material, {
  //               opacity: 0,
  //               duration: 1,
  //               onComplete: () => {
  //                 gsap.set(cloud.position, {
  //                   z: -5
  //                 })
  //               }
  //             })
  //           })
  //         } else {
  //           gsap.to(cloud.position, {
  //             ease: "none",
  //             duration: 1,
  //             z: "+=1"
  //           })
  //         }
  //       })
  //     }, 1000)
  //   }
  // }, [group])

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
