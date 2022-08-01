import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import gsap, { CSSPlugin, ScrollTrigger } from 'gsap/all'

import media from 'styles/media'

import { useMedia } from 'utils/hooks'

import Animation from 'components/AppearAnimation'
import Footer from  'components/Footer'
import Scroll from 'components/Scroll'

import DiamondGIF from 'images/diamond.gif'

import Hero       from './sections/01-Hero'
import Date       from './sections/02-Date'
import Meet       from  './sections/03-Meet'
import Tinder     from  './sections/04-Tinder'
import Snuggle    from  './sections/05-Snuggle'
import Wedlocked  from  './sections/06-Wedlocked'
import PathFiller from  './sections/07-PathFiller'

gsap.registerPlugin(CSSPlugin, ScrollTrigger)

const Home = () => {

  const [diamondEl, setDiamondEl] = useState(null)
  const [animationWrapperEl, setAnimationWrapperEl] = useState(null)

  const [diamondTrigger, setDiamondTrigger] = useState(false)

  const animationHeight = useMedia('45vw', '45vw', '45vw', '112vw')
  const diamondHeight = useMedia('56.25vw', '56.25vw', '56.25vw', '112vw')
  const diamondScrollHeight = useMedia('5.25vw', '5.25vw', '5.25vw', '25vw')
  const diamondScrollBottom = useMedia('2vw', '2vw', '2vw', '90vw')

  useEffect(() => {
    if (diamondEl) {
      const enterTl = gsap.timeline()
  
      enterTl.call(setDiamondTrigger, [true], 1)
      enterTl.fromTo(diamondEl, {
        height: '5.25vw'
      }, {
        height: diamondHeight,
        duration: 1
      }, 1)
  
      return () => {
        enterTl.kill()
      }
    }
  }, [diamondHeight, diamondEl])

  useEffect(() => {
    if (diamondEl && animationWrapperEl) {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#scroll-wrapper",
          start: "top top",
          end: "top+=500 top",
          scrub: true,
        }
      })
  
      scrollTl.fromTo(diamondEl, {
        height: diamondHeight
      }, {
        height: diamondScrollHeight
      }, 0)
  
      scrollTl.to(animationWrapperEl, {
        bottom: diamondScrollBottom
      }, 0)
  
      return () => {
        scrollTl.kill()
      }
    }
  }, [diamondScrollBottom, diamondScrollHeight, diamondHeight, diamondEl, animationWrapperEl])

  return (
    <>
      <AnimationWrapper ref={ref => setAnimationWrapperEl(ref)}>
        <Animation trigger={diamondTrigger} duration={0.65} height={animationHeight}>
          <Diamond ref={ref => setDiamondEl(ref)} src={DiamondGIF} alt="rotating diamond"/>
        </Animation>
      </AnimationWrapper>

      <Scroll>
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

const Diamond = styled.img``

const AnimationWrapper = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 45vw;

  .vsc-controller {
    display: none;
  }

  ${media.mobile} {
    height: 112vw;    
  }
`
