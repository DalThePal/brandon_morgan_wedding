import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import media from 'styles/media'

import { useMedia } from 'utils/hooks'

import Animation from 'components/AppearAnimation'
import Scroll from 'components/Scroll'

import DiamondGIF from 'images/diamond.gif'

import Hero       from './sections/01-Hero'
import Date       from './sections/02-Date'
import Meet       from  './sections/03-Meet'
import Tinder     from  './sections/04-Tinder'
import Snuggle    from  './sections/05-Snuggle'
import Wedlocked  from  './sections/06-Wedlocked'
import PathFiller from  './sections/07-PathFiller'
import Footer     from  'components/Footer'

const Home = () => {

  const diamondWrapperRef = useRef(null)
  const diamondRef = useRef(null)

  const [diamondTrigger, setDiamondTrigger] = useState(false)
  const [initComplete, setInitComplete] = useState(false)

  const animationHeight = useMedia('45vw', '45vw', '45vw', '112vw')
  const diamondHeight = useMedia('56.25vw', '56.25vw', '56.25vw', '112vw')
  const diamondScrollHeight = useMedia('5.125vw', '5.125vw', '5.125vw', '25vw')
  const diamondScrollBottom = useMedia('21.8vw', '21.8vw', '21.8vw', '132vw')

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setInitComplete(true)
      }
    })

    tl.call(setDiamondTrigger, [true], 1)
    tl.to(diamondRef.current, {
      duration: 0.5,
      height: diamondHeight
    }, 1.4)

    return () => {
      tl.kill()
    }
  }, [diamondHeight, diamondScrollHeight, diamondScrollBottom, setInitComplete])

  useEffect(() => {
    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#smooth-content",
        start: "top top",
        end: "bottom bottom",
        pin: diamondWrapperRef.current,
        scrub: true
      }
    })

    return () => {
      pinTl.kill()
    }
  }, [])

  useEffect(() => {
    if (initComplete) {

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#smooth-content",
          start: "top-=1 top",
          end: "top+=500 top",
          pin: diamondWrapperRef.current,
          scrub: true
        }
      })

      scrollTl.set(diamondRef.current, {
        top: 'unset'
      })
      
      scrollTl.fromTo(diamondRef.current, {
        height: diamondHeight,
      }, {
        duration: 1,
        height: diamondScrollHeight,
      }, 0)

      scrollTl.to(diamondWrapperRef.current, {
        duration: 1,
        top: diamondScrollBottom
      }, 0)

      return () => {
        scrollTl.kill()
      }
    }
  }, [diamondHeight, diamondScrollHeight, diamondScrollBottom, initComplete])

  return (
    <>

      <Scroll>
        <AnimationWrapper ref={diamondWrapperRef}>
          <Animation trigger={diamondTrigger} duration={0.65} height={animationHeight}>
            <Diamond ref={diamondRef} src={DiamondGIF} alt="rotating diamond"/>
          </Animation>
        </AnimationWrapper>
        <Hero/>
        <Date/>
        <Meet/>
        <Tinder/>
        <Snuggle/>
        <Wedlocked/>
        <PathFiller/>
        <Footer
          leftText={"We're getting married. You're getting a hangover."}
        />
      </Scroll>
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
  width: 100%;
  height: 45vw;

  .vsc-controller {
    display: none;
  }

  ${media.mobile} {
    height: 112vw;    
  }
`
