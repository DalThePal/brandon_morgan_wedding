import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import { useMedia } from 'utils/hooks'

import colors from 'styles/colors'
import text from 'styles/text'
import media from 'styles/media'

import Wedlocked1PNG from 'images/home/wedlocked1.jpg'
import Wedlocked2PNG from 'images/home/wedlocked2.jpg'
import Wedlocked3PNG from 'images/home/wedlocked3.jpg'
import Wedlocked4PNG from 'images/home/wedlocked4.jpg'
import Wedlocked5PNG from 'images/home/wedlocked5.jpg'

const Wedlocked = () => {

  const [wrapperEl, setWrapperEl] = useState(null)
  const [innerEl, setInnerEl] = useState(null)

  const scrollStart = useMedia(
    `top+=${(window.innerWidth / 100) * 21} top`,
    `top+=${(window.innerWidth / 100) * 21} top`,
    `top+=${(window.innerWidth / 100) * 21} top`,
    `top top+=${(window.innerWidth / 100) * 30}`
  )

  const scrollEnd = useMedia(
    `bottom bottom+=${(window.innerWidth / 100) * 21}`,
    `bottom bottom+=${(window.innerWidth / 100) * 21}`,
    `bottom bottom+=${(window.innerWidth / 100) * 21}`,
    `top top-=${(window.innerWidth / 100) * 200}`
  )

  const innerLeft = useMedia('-25%', '-25%', '-25%', '-58%')

  useEffect(() => {
    if (wrapperEl && innerEl) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperEl,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
          pin: innerEl
        }
      })
  
      tl.to(innerEl, {
        left: innerLeft,
        ease: 'none'
      }, 0)
  
      return () => {
        tl.kill()
      }
    }
  }, [wrapperEl, innerEl, scrollStart, scrollEnd, innerLeft])

  return (
    <Wrapper ref={ref => setWrapperEl(ref)}>
      <Inner ref={ref => setInnerEl(ref)} >
        <Title1>Wedlocked</Title1>
        <Title2>&</Title2>
        <Title3>Loaded</Title3>

        <Img1 src={Wedlocked1PNG} alt="Brandon in New York"/>
        <Img2 src={Wedlocked2PNG} alt="Brandon and Morgan"/>
        <Img3 src={Wedlocked3PNG} alt="Brandon and Morgan showing ring"/>
        <Img4 src={Wedlocked4PNG} alt="Morgan showing ring"/>
        <Img5 src={Wedlocked5PNG} alt="Morgan showing off her ring"/>

        <Text>
          In May of 2021, Brandon surprised Morgan with a birthday trip 
          to New York City. After a beautiful day of museum-exploring, 
          treat-eating, and view-seeking, Brandon knelt down and proposed 
          on a pier overlooking the Hudson River. Morgan screamed, cried, 
          and ran in the opposite direction (a reaction she insists was 
          due to her excitement). With the NYC skyline behind them, they 
          immediately began looking forward to their wedding (an opportunity 
          to eat, drink, and be married with their beloved family and friends).
        </Text>
        
      </Inner>
    </Wrapper>
  )
}

export default Wedlocked


const Wrapper = styled.section`
  position: relative;
  z-index: 3;
  width: 100%;

  height: 190vw;

  ${media.mobile} {
    height: 539.734vw;
    overflow: hidden;
  }
`

const Inner = styled.div`
  position: relative;
  z-index: 3;

  height: 95vw;
  width: 200vw;

  ${media.mobile} {
    height: 269.867vw;
    width: 346.667vw;
  }
`

const Title1 = styled.h2`
  ${text.desktop.h3}
  color: ${colors.roseIvory};
  position: absolute;
  z-index: 2;

  top: 25.694vw;
  left: 2.083vw;

  ${media.mobile} {
    ${text.mobile.h4}
    top: 5.333vw;
    left: 8vw;
  }
`

const Title2 = styled.h2`
  ${text.desktop.h1}
  color: ${colors.roseIvory};
  position: absolute;
  z-index: 2;

  top: 35.486vw;
  left: 3.889vw;

  ${media.mobile} {
    ${text.mobile.h2}
    font-size: 106.667vw;
    top: 29.867vw;
    left: 12.267vw;
  }
`

const Title3 = styled.h2`
  ${text.desktop.h3}
  color: ${colors.roseIvory};
  position: absolute;
  z-index: 2;

  top: 47.083vw;
  left: 41.181vw;

  ${media.mobile} {
    ${text.mobile.h4}
    top: 59.733vw;
    left: 95.2vw;
  }
`

const Img = styled.img`
  position: absolute;
  opacity: 0.75;
`

const Img1 = styled(Img)`
  left: 8.333vw;
  top: 24.306vw;
  width: 18.75vw;
  height: 25vw;

  ${media.mobile} {
    left: 26.667vw;
    top: 0vw;
    width: 45.333vw;
    height: 60.533vw;
  }
`

const Img2 = styled(Img)`
  width: 29.583vw;
  height: 22.292vw;
  top: 38.056vw;
  left: 29.792vw;

  ${media.mobile} {
    width: 71.467vw;
    height: 53.867vw;
    left: 78.4vw;
    top: 33.333vw;
  }
`

const Img3 = styled(Img)`
  width: 18.75vw;
  height: 25vw;
  top: 28.681vw;
  left: 62.153vw;

  ${media.mobile} {
    width: 45.333vw;
    height: 60.533vw;
    top: 18.133vw;
    left: 156.8vw;
  }
`

const Img4 = styled(Img)`
  width: 18.681vw;
  height: 24.861vw;
  top: 46.528vw;
  left: 83.819vw;

  ${media.mobile} {
    width: 45.067vw;
    height: 60.267vw;
    top: 53.867vw;
    left: 209.067vw;
  }
`

const Img5 = styled(Img)`
  width: 18.75vw;
  height: 24.972vw;
  top: 27.014vw;
  left: 105.278vw;

  ${media.mobile} {
    width: 45.333vw;
    height: 60.533vw;
    top: 32vw;
    left: 260.8vw;
  }
`

const Text = styled.p`
  ${text.desktop.body}
  position: absolute;
  color: ${colors.roseIvory};

  width: 53.889vw;
  left: 72.917vw;
  top: 73.472vw;

  ${media.mobile} {
    ${text.mobile.body}
    width: 335px;
    left: 209.6vw;
    top: 125.867vw;
  }
`
