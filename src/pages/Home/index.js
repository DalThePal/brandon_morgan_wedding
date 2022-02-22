import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import media from 'styles/media'

import { useMedia } from 'utils/hooks'

import Hero       from './sections/01-Hero'
import Date       from './sections/02-Date'
import Meet       from './sections/03-Meet'
import Tinder     from './sections/04-Tinder'
import Snuggle    from './sections/05-Snuggle'
import Wedlocked  from './sections/06-Wedlocked'
import PathFiller from './sections/07-PathFiller'

import Animation from 'components/AppearAnimation'
import Footer from 'components/Footer'

import DiamondGIF from 'videos/diamond.gif'

const Home = () => {

  const diamondRef = useRef(null)

  const [diamondTrigger, setDiamondTrigger] = useState(false)

  const animationHeight = useMedia('45vw', '45vw', '45vw', '112vw')
  const diamondHeight = useMedia('56.25vw', '56.25vw', '56.25vw', '112vw')
  const diamondScrollHeight = useMedia('5.125vw', '5.125vw', '5.125vw', '25vw')
  const diamondScrollBottom = useMedia('21.8vw', '21.8vw', '21.8vw', '166vw')

  useEffect(() => {
    const tl = gsap.timeline()

    tl.call(setDiamondTrigger, [true], 1)
    tl.to(diamondRef.current, {
      duration: 0.8,
      height: diamondHeight
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
          <Diamond ref={diamondRef} src={DiamondGIF}/>
        </Animation>
      </AnimationWrapper>

      <Hero/>
      <Date/>
      <Meet/>
      <Tinder/>
      <Snuggle/>
      <Wedlocked/>
      <PathFiller/>
      <Footer/>
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
