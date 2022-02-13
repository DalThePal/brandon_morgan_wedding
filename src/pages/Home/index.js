import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import Hero       from './sections/01-Hero'
import Date       from './sections/02-Date'
import Meet       from './sections/03-Meet'
import Tinder     from './sections/04-Tinder'
import Snuggle    from './sections/05-Snuggle'
import Wedlocked  from './sections/06-Wedlocked'

import Animation from 'components/AppearAnimation'

import DiamondMP4 from 'images/diamond.mp4'

const Home = () => {

  const diamondRef = useRef(null)

  const [diamondTrigger, setDiamondTrigger] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        diamondRef.current.play()
      }
    })

    tl.call(setDiamondTrigger, [true], 1)
    tl.to(diamondRef.current, {
      duration: 0.8,
      height: '56.25vw'
    }, 0.2)

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        scroller: ".smooth-scroll",
        trigger: ".smooth-scroll",
        start: "top top",
        end: "top+=500 top",
        scrub: true
      }
    })

    scrollTl.set(diamondRef.current, {
      position: 'fixed',
      top: 'unset'
    })
    scrollTl.to(diamondRef.current, {
      height: '5.125vw',
      bottom: '21.8vw'
    })

    return () => {
      tl.kill()
      scrollTl.kill()
    }
  }, [])

  return (
    <>
      <AnimationWrapper>
        <Animation trigger={diamondTrigger} duration={0.65} height={"45vw"}>
          <Diamond 
            ref={diamondRef} 
            muted 
            loop 
            controls={false}
            src={DiamondMP4} 
            alt="diamond"
            data-scroll-sticky
            data-scroll-target=".smooth-scroll"
          />
        </Animation>
      </AnimationWrapper>

      <Hero/>
      <Date/>
      <Meet/>
      <Tinder/>
      <Snuggle/>
      <Wedlocked/>
    </>
  )
}

export default Home

const Diamond = styled.video`
  position: absolute;
  z-index: 2;
  width: 100vw;
  top: 0;
  left: 0;
  height: 5.25vw;
`

const AnimationWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 45vw;

  .vsc-controller {
    display: none;
  }
`
