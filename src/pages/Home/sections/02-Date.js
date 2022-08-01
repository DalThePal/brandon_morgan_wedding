import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import { useMedia } from 'utils/hooks'

import { VR } from 'components/Styled'

import colors from 'styles/colors'
import text from 'styles/text'
import media from 'styles/media'

const Date = () => {

  const [wrapperEl, setWrapperEl] = useState(null)
  const [vrEl, setVrEl] = useState(null)
  const [initial, setInitial] = useState(false)

  const scrollTlStart = useMedia(
    `top-=${(window.innerWidth / 100) * 3} bottom-=${(window.innerWidth / 100) * 20}`,
    `top-=${(window.innerWidth / 100) * 3} bottom-=${(window.innerWidth / 100) * 20}`,
    `top-=${(window.innerWidth / 100) * 3} bottom-=${(window.innerWidth / 100) * 20}`,
    `top-=${(window.innerWidth / 100) * 90.4} bottom-=${(window.innerWidth / 100) * 132}`
  )

  const scrollTlEnd = useMedia(
    `bottom bottom+=${(window.innerWidth / 100) * 27}`,
    `bottom bottom+=${(window.innerWidth / 100) * 27}`,
    `bottom bottom+=${(window.innerWidth / 100) * 27}`,
    `bottom bottom-=${(window.innerWidth / 100) * 37}`
  )

  const vrHeight = useMedia("34.236vw", "34.236vw", "34.236vw", "131.467vw")

  useEffect(() => {
    if (vrEl) {
      const tl = gsap.timeline({
        delay: 1.2,
        onComplete: () => {
          setInitial(true)
        }
      })
  
      tl.fromTo(vrEl, {
        height: '0vw'
      }, {
        duration: 1.4,
        height: vrHeight
      }, 0)
  
      return () => {
        tl.kill()
      }
    }
  }, [vrHeight, vrEl])

  useEffect(() => {
    if (wrapperEl && vrEl && initial) {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperEl,
          start: scrollTlStart,
          end: scrollTlEnd,
          scrub: true,
          markers: true
        }
      })
  
      scrollTl.fromTo(vrEl, {
        height: vrHeight,
        immediateRender: false,

      }, {
        immediateRender: false,
        height: '0vw',
        ease: 'none'
      })
  
      return () => {
        scrollTl.kill()
      }
    }
  }, [scrollTlStart, scrollTlEnd, wrapperEl, vrEl, vrHeight, initial])

  return (
    <Wrapper ref={ref => setWrapperEl(ref)}>

      <StyledVR ref={ref => setVrEl(ref)}/>

      <SubText>WE'RE SAYING I DO</SubText>
      <Title>September 10th, 2022</Title>
    </Wrapper>
  )
}

export default Date

const Wrapper = styled.section`
  position: relative;
  z-index: 3;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 34.722vw;
  height: 78.333vw;

  ${media.mobile} {
    padding-top: 54.4vw;
    height: 139.467vw;
  }
`

const SubText = styled.h3`
  position: relative;
  z-index: 5;
  ${text.desktop.body};
  color: ${colors.roseIvory};

  margin-bottom: 2.639vw;

  ${media.mobile} {
    ${text.mobile.body}
    margin-bottom: 6.667vw;
  }
`

const Title = styled.h2`
  ${text.desktop.h4}
  color: ${colors.roseIvory};
  text-align: center;

  width: 83.333vw;

  ${media.mobile} {
    ${text.mobile.h2}
    width: 89.333vw;
  }
`

const StyledVR = styled(VR)`
  left: 50%;
  transform: translate(-50%);
  height: 0vw;
  bottom: 47.778vw;

  ${media.mobile} {
    bottom: 98.4vw;
  }
`
