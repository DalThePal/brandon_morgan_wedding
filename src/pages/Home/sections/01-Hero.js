import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import AppearAnimation from 'components/AppearAnimation'

import { useCloudMovement } from 'utils/hooks'

import colors from 'styles/colors'
import text from 'styles/text'
import media from 'styles/media'

import CloudPNG from 'images/cloud.png'

const Hero = () => {
  const [cloud1Ref, setCloud1Ref] = useState(null) 
  const [cloud2Ref, setCloud2Ref] = useState(null) 
  const [cloud3Ref, setCloud3Ref] = useState(null) 

  const [title1Trigger, setTitle1Trigger] = useState(false)
  const [title2Trigger, setTitle2Trigger] = useState(false)
  const [title3Trigger, setTitle3Trigger] = useState(false)
 
  useCloudMovement([
    cloud1Ref,
    cloud2Ref,
    cloud3Ref
  ])

  useEffect(() => {
    if (cloud1Ref && cloud2Ref && cloud3Ref) {
      const tl = gsap.timeline()
  
      tl.call(setTitle2Trigger, [true], 1.2)
      tl.call(setTitle1Trigger, [true], 1.4)
      tl.call(setTitle3Trigger, [true], 1.5)
  
      tl.fromTo([cloud1Ref, cloud2Ref, cloud3Ref], {
        y: '100%'
      }, {
        duration: 1,
        ease: 'circ.out',
        opacity: 1,
        y: '0%'
      }, 1.5)
  
      return () => {
        tl.kill()
      }
    }
  }, [cloud1Ref, cloud2Ref, cloud3Ref])

  return (
    <Wrapper>

      <Title1>
        <AppearAnimation trigger={title1Trigger} duration={0.5} height="12.5vw">Morgan</AppearAnimation>
      </Title1>
      <Title2>
        <AppearAnimation trigger={title2Trigger} duration={0.5} height="25vw">&</AppearAnimation>
      </Title2>
      <Title3>
        <AppearAnimation trigger={title3Trigger} duration={0.5} height="12.5vw">Brandon</AppearAnimation>
      </Title3>

      <Cloud1 ref={ref => setCloud1Ref(ref)} src={CloudPNG} alt="cloud"/>
      <Cloud2 ref={ref => setCloud2Ref(ref)} src={CloudPNG} alt="cloud"/>
      <Cloud3 ref={ref => setCloud3Ref(ref)} src={CloudPNG} alt="cloud"/>

    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  position: relative;
  z-index: 69;
  width: 100%;

  height: 56.25vw;

  ${media.mobile} {
    height: 244vw;
  }
`

const Title1 = styled.h1`
  ${text.desktop.h4}
  position: absolute;
  z-index: 4;
  color: ${colors.roseIvory};

  width: 46.181vw;
  top: 10.417vw;
  left: 11.25vw;

  ${media.mobile} {
    ${text.mobile.h1}
    width: 74.133vw;
    top: 82vw;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Title2 = styled.h2`
  ${text.desktop.h2}
  z-index: 4;
  position: absolute;
  color: ${colors.roseIvory};

  width: 31.944vw;
  top: 17.014vw;
  left: 17.639vw;

  ${media.mobile} {
    ${text.mobile.h5}
    width: 46.133vw;
    top: 90.933vw;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Title3 = styled.h2`
  ${text.desktop.h4}
  position: absolute;
  z-index: 4;
  color: ${colors.roseIvory};

  width: 52.847vw;
  top: 33.333vw;
  left: 32.014vw;

  ${media.mobile} {
    ${text.mobile.h1}
    width: 85.067vw;
    left: 50%;
    transform: translateX(-50%);
    top: 120vw;
  }
`

const Cloud1 = styled.img`
  position: absolute;
  z-index: 1;
  opacity: 0;

  right: -0.625vw;
  top: 54.444vw;
  width: 58.264vw;
  height: 33.264vw;

  ${media.mobile} {
    right: 25.867vw;
    top: 185.6vw;
    width: 112vw;
    height: 63.733vw;
  }
`

const Cloud2 = styled.img`
  position: absolute;
  transform: rotate(180deg);
  z-index: 1;
  opacity: 0;

  top: 37.778vw;
  left: -19.167vw;
  width: 88.75vw;
  height: 50.764vw;
  
  ${media.mobile} {
    top: 168.533vw;
    left: 55.2vw;
    width: 71.467vw;
    height: 40.8vw;
  }
`

const Cloud3 = styled.img`
  position: absolute;
  transform: rotate(180deg);
  z-index: 1;
  opacity: 0;

  right: -5.833vw;
  top: 45.556vw;
  width: 37.292vw;
  height: 21.319vw;

  ${media.mobile} {
    right: -15.733vw;
    top: 153.6vw;
    width: 170.4vw;
    height: 97.333vw;
  }
`
