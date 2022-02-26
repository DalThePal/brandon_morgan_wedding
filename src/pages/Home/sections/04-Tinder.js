import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import { useMedia, useCloudMovement } from 'utils/hooks'

import { VR } from 'components/Styled'

import colors from 'styles/colors'
import text from 'styles/text'
import media from 'styles/media'

import CloudPNG from 'images/cloud.png'
import TinderPNG from 'images/tinder.png'

const Tinder = () => {

  const wrapperRef  = useRef(null)
  const vrRef       = useRef(null)

  const [cloud1Ref, setCloud1Ref] = useState(null) 
  const [cloud2Ref, setCloud2Ref] = useState(null) 
  const [cloud3Ref, setCloud3Ref] = useState(null) 
  const [cloud4Ref, setCloud4Ref] = useState(null) 
 
  useCloudMovement([
    cloud1Ref,
    cloud2Ref,
    cloud3Ref,
    cloud4Ref
  ])

  const scrollStart = useMedia(
    `top-=${(window.innerWidth / 100) * 18.6} bottom-=${(window.innerWidth / 100) * 32}`,
    `top-=${(window.innerWidth / 100) * 18.6} bottom-=${(window.innerWidth / 100) * 32}`,
    `top-=${(window.innerWidth / 100) * 18.6} bottom-=${(window.innerWidth / 100) * 32}`,
    `top-=${(window.innerWidth / 100) * 40} bottom-=${(window.innerWidth / 100) * 132}`
  )

  const scrollEnd = useMedia(
    `bottom bottom+=${(window.innerWidth / 100) * 25}`,
    `bottom bottom+=${(window.innerWidth / 100) * 25}`,
    `bottom bottom+=${(window.innerWidth / 100) * 25}`,
    `bottom bottom+=${(window.innerWidth / 100) * 150}`
  )

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: ".smooth-scroll",
        trigger: wrapperRef.current,
        start: scrollStart,
        end: scrollEnd,
        scrub: true,
      }
    })

    tl.to(vrRef.current, {
      height: '0%',
      ease: "none"
    })

    return () => {
      tl.kill()
    }
  }, [scrollStart, scrollEnd])

  return (
    <Wrapper ref={wrapperRef} data-scroll-section>

      <StyledVR ref={vrRef}/>

      <Cloud1 ref={ref => setCloud1Ref(ref)} src={CloudPNG} alt="cloud"/>
      <Cloud2 ref={ref => setCloud2Ref(ref)} src={CloudPNG} alt="cloud"/>
      <Cloud3 ref={ref => setCloud3Ref(ref)} src={CloudPNG} alt="cloud"/>
      <Cloud4 ref={ref => setCloud4Ref(ref)} src={CloudPNG} alt="cloud"/>

      <Title>Love at first swipe</Title>
      <Text>
        One summer night in 2018, their connection was rekindled by a 
        Tinder “super-like” and an impulsive Facebook Message. After 
        a few laughter-filled dinner dates, the two realized their 
        “match” just might really be perfect.
      </Text>

      <ImgWrapper>
        <Img src={TinderPNG} alt="a rekindled tinder"/>
      </ImgWrapper>
    </Wrapper>
  )
}

export default Tinder

const Wrapper = styled.section`
  position: relative;
  z-index: 3;
  width: 100%;

  height: 117.083vw;

  ${media.mobile} {
    height: 444.533vw;
  }
`

const Cloud1 = styled.img`
  position: absolute;
  transform: rotate(180deg) scaleX(-1);

  left: -7.361vw;
  top: 14.722vw;
  height: 21.319vw;
  width: 37.292vw;

  ${media.mobile} {
    left: -21.6vw;
    top: 30.933vw;
    height: 41.067vw;
    width: 72vw;
  }
`

const Cloud2 = styled.img`
  position: absolute;

  left -18.47vw;
  top: 14.86vw;
  height: 50.76vw;
  width: 88.75vw;

  ${media.mobile} {
    transform: rotate(180deg);
    left: 1.867vw;
    top: 0vw;
    height: 97.867vw;
    width: 171.2vw;
  }
`

const Cloud3 = styled.img`
  position: absolute;
  transform: rotate(180deg);

  right: -17.639vw;
  top: 6.944vw;
  width: 88.75vw;
  height: 50.764vw;

  ${media.mobile} {
    transform: rotate(0deg);
    right: -2.667vw;
    top: 48.267vw;
    width: 112.267vw;
    height: 64vw;
  }
`

const Cloud4 = styled.img`
  position: absolute;
  transform: scaleX(-1);

  left: 49.17vw;
  top: 32.36vw;
  width: 58.26vw;
  height: 33.26vw;
`

const Title = styled.h2`
  ${text.desktop.h5}
  position: absolute;
  z-index: 2;
  color: ${colors.roseIvory};

  width: 51.319vw;
  right: 8.056vw;
  top: 74.375vw;

  ${media.mobile} {
    ${text.mobile.h6}
    width: 89.333vw;
    right: 50%;
    transform: translateX(50%);
    top: 272vw;
  }
`

const Text = styled.p`
  ${text.desktop.body}
  position: absolute;
  color: ${colors.roseIvory};

  width: 40.417vw;
  right: 9.583vw;
  top: 94.861vw;

  ${media.mobile} {
    ${text.mobile.body}
    width: 89.333vw;
    right: 50%;
    transform: translateX(50%);
    top: 353.867vw;
  }
`

const ImgWrapper = styled.div`
  position: absolute;
  background: ${colors.background};

  width: 29.514vw;
  height: 55.556vw;
  left: 8.333vw;
  top: 61.528vw;

  ${media.mobile} {
    opacity: 0.8;
    width: 89.333vw;
    height: 128vw;
    left: 50%;
    transform: translateX(-50%);
    top: 173.333vw;
  }
`

const Img = styled.img`
  object-fit: cover;
  mix-blend-mode: screen;

  width: 100%;
  height: 100%;
`

const StyledVR = styled(VR)`
  left: 50%;
  transform: translateX(-50%);

  height: 79.514vw;
  bottom: 46.181vw;

  ${media.mobile} {
    height: 200vw;
    bottom: 284.533vw;
  }
`
