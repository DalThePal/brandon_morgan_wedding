import React, { useRef, useState, useEffect, lazy, Suspense } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import media from 'styles/media'

import { useMedia } from 'utils/hooks'

import Animation from 'components/AppearAnimation'

import DiamondGIF from 'images/diamond.gif'

import Hero from './sections/01-Hero'
import Date from './sections/02-Date'
const Meet       = lazy(() => import('./sections/03-Meet'))
const Tinder     = lazy(() => import('./sections/04-Tinder'))
const Snuggle    = lazy(() => import('./sections/05-Snuggle'))
const Wedlocked  = lazy(() => import('./sections/06-Wedlocked'))
const PathFiller = lazy(() => import('./sections/07-PathFiller'))
const Footer     = lazy(() => import('components/Footer'))


const Home = () => {

  const diamondRef = useRef(null)

  const [diamondTrigger, setDiamondTrigger] = useState(false)

  const animationHeight = useMedia('45vw', '45vw', '45vw', '112vw')
  const diamondHeight = useMedia('56.25vw', '56.25vw', '56.25vw', '112vw')
  const diamondScrollHeight = useMedia('5.125vw', '5.125vw', '5.125vw', '25vw')
  const diamondScrollBottom = useMedia('21.8vw', '21.8vw', '21.8vw', '132vw')

  useEffect(() => {
    const tl = gsap.timeline()

    tl.call(setDiamondTrigger, [true], 1)
    tl.to(diamondRef.current, {
      duration: 0.5,
      height: diamondHeight
    }, 1.4)

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
      height: diamondScrollHeight,
      bottom: diamondScrollBottom
    })

    return () => {
      tl.kill()
      scrollTl.kill()
    }
  }, [diamondHeight, diamondScrollHeight, diamondScrollBottom])

  return (
    <>
      <AnimationWrapper>
        <Animation trigger={diamondTrigger} duration={0.65} height={animationHeight}>
          <Diamond ref={diamondRef} src={DiamondGIF} alt="rotating diamond"/>
        </Animation>
      </AnimationWrapper>

      <Hero/>
      <Date/>
      <Suspense fallback={<div/>}>
        <Meet/>
        <Tinder/>
        <Snuggle/>
        <Wedlocked/>
        <PathFiller/>
        <Footer
          leftText={"We're getting married. You're getting a hangover."}
        />
      </Suspense>
    </>
  )
}

export default Home

const Diamond = styled.img`
  height: 5.25vw;

  ${media.mobile} {
    height: 112vw;
  }
`

const AnimationWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 45vw;

  .vsc-controller {
    display: none;
  }

  ${media.mobile} {
    height: 112vw;    
  }
`
