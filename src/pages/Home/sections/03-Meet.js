import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import { useMedia } from 'utils/hooks'

import { VR } from 'components/Styled'

import colors from 'styles/colors'
import text from 'styles/text'
import media from 'styles/media'

import MeetPNG from 'images/meet.png'

const Meet = () => {

  const wrapperRef  = useRef(null)
  const vrRef       = useRef(null)

  const scrollStart = useMedia(
    `top-=${(window.innerWidth / 100) * 10.4} bottom-=${(window.innerWidth / 100) * 10}`,
    `top-=${(window.innerWidth / 100) * 10.4} bottom-=${(window.innerWidth / 100) * 10}`,
    `top-=${(window.innerWidth / 100) * 10.4} bottom-=${(window.innerWidth / 100) * 10}`,
    `top-=${(window.innerWidth / 100) * 30} bottom-=${(window.innerWidth / 100) * 166}`
  )

  const scrollEnd = useMedia(
    `bottom bottom+=${(window.innerWidth / 100) * 32}`,
    `bottom bottom+=${(window.innerWidth / 100) * 32}`,
    `bottom bottom+=${(window.innerWidth / 100) * 32}`,
    `bottom bottom+=${(window.innerWidth / 100) * 125}`
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
      height: '0vw',
      ease: 'none'
    }, 0)

    return () => {
      tl.kill()
    }
  }, [scrollStart, scrollEnd])

  return (
    <Wrapper ref={wrapperRef}>

      <StyledVR ref={vrRef}/>

      <Title>The meet cute</Title>
      <Text>
        Brandon first laid eyes on Morgan in the noisy kitchen of a 
        University of Utah college party house lovingly referred to 
        as “the 444.” (Mom and dad, we met at church). A few fleeting 
        glances and casually acquainted run-ins later, the two lost 
        touch as years passed.
      </Text>

      <ImageWrapper>
        <Img src={MeetPNG} alt="Morgan meets Brandon"/>
      </ImageWrapper>
    </Wrapper>
  )
}

export default Meet

const Wrapper = styled.section`
  position: relative;
  z-index: 3;
  width: 100%;

  height: 63.861vw;

  ${media.mobile} {
    height: 334.133vw;
  }
`

const Title = styled.h3`
  ${text.desktop.h5}
  position: absolute;
  z-index: 2;
  color: ${colors.roseIvory};

  left: 8.333vw;
  top: 32.986vw;

  ${media.mobile} {
    ${text.mobile.h6}
    top: 152vw;
    left: 5.333vw;
  }
`

const Text = styled.p`
  ${text.desktop.body}
  position: absolute;
  z-index: 2;
  color: ${colors.roseIvory};

  top: 44.097vw;
  left: 19.097vw;
  width: 40.278vw;
  height: 10.417vw;

  ${media.mobile} {
    ${text.mobile.body}
    top: 208.8vw;
    left: 50%;
    transform: translateX(-50%);
    width: 89.333vw;
    height: 72vw;
  }
`

const ImageWrapper = styled.div`
  position: absolute;
  z-index: 1;
  opacity: 0.75;
  background: ${colors.background};

  width: 40.278vw;
  height: 52.083vw;
  top: 13.819vw;
  right: 8.333vw;

  ${media.mobile} {
    width: 89.333vw;
    height: 115.467vw;
    top: 53.333vw;
    right: 50%;
    transform: translateX(50%);
  }
`

const Img = styled.img`
  mix-blend-mode: screen;
  object-fit: cover;

  width: 100%;
  height: 100%;
`

const StyledVR = styled(VR)`
  left: 50%;
  transform: translate(-50%);

  height: 32.639vw;
  bottom: 52.639vw;

  ${media.mobile} {
    height: 66.667vw;
    bottom: 294.133vw;
  }
`
