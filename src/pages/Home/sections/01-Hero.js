import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import AppearAnimation from 'components/AppearAnimation'
// import Clouds from 'components/Clouds'

import colors from 'styles/colors'
import text from 'styles/text'
import media from 'styles/media'

const Hero = () => {
  const [title1Trigger, setTitle1Trigger] = useState(false)
  const [title2Trigger, setTitle2Trigger] = useState(false)
  const [title3Trigger, setTitle3Trigger] = useState(false)

  useEffect(() => {
  
    const tl = gsap.timeline()

    tl.call(setTitle2Trigger, [true], 1.2)
    tl.call(setTitle1Trigger, [true], 1.4)
    tl.call(setTitle3Trigger, [true], 1.5)

    return () => {
      tl.kill()
    }
    
  }, [])

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

    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  position: relative;

  width: 100%;
  will-change: transform;

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
  will-change: transform;

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

