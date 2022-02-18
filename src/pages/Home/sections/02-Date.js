import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import { useMedia } from 'utils/hooks'

import colors from 'styles/colors'
import text from 'styles/text'
import media from 'styles/media'

const Date = () => {

  const wrapperRef = useRef(null)
  const vrRef = useRef(null)

  const scrollTlStart = useMedia(
    `top-=${(window.innerWidth / 100) * 3} bottom-=${(window.innerWidth / 100) * 20}`,
    `top-=${(window.innerWidth / 100) * 3} bottom-=${(window.innerWidth / 100) * 20}`,
    `top-=${(window.innerWidth / 100) * 3} bottom-=${(window.innerWidth / 100) * 20}`,
    `top-=${(window.innerWidth / 100) * 90.4} bottom-=${(window.innerWidth / 100) * 166}`
  )

  const scrollTlEnd = useMedia(
    `bottom bottom+=${(window.innerWidth / 100) * 27}`,
    `bottom bottom+=${(window.innerWidth / 100) * 27}`,
    `bottom bottom+=${(window.innerWidth / 100) * 27}`,
    `bottom bottom+=${(window.innerWidth / 100) * -69}`
  )

  useEffect(() => {
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        scroller: '.smooth-scroll',
        trigger: wrapperRef.current,
        start: scrollTlStart,
        end: scrollTlEnd,
        scrub: true,
      }
    })

    scrollTl.to(vrRef.current, {
      height: '0vw',
      ease: 'none'
    })

    return () => {
      scrollTl.kill()
    }
  }, [scrollTlStart, scrollTlEnd])

  return (
    <Wrapper ref={wrapperRef} data-scroll-section>

      <VR ref={vrRef}/>

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

const VR = styled.div`
  background-color: ${colors.roseIvory};
  position: absolute;
  left: 50%;
  transform: translate(-50%);

  width: 0.069vw;
  height: 34.236vw;
  bottom: 47.778vw;

  ${media.mobile} {
    width: 0.267vw;
    height: 131.467vw;
    bottom: 98.4vw;
  }
`
