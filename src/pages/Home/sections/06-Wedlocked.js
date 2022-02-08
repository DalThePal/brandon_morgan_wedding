import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import colors from 'styles/colors'
import text from 'styles/text'

import Wedlocked1PNG from 'images/wedlocked1.png'
import Wedlocked2PNG from 'images/wedlocked2.png'
import Wedlocked3PNG from 'images/wedlocked3.png'
import Wedlocked4PNG from 'images/wedlocked4.png'
import Wedlocked5PNG from 'images/wedlocked5.png'

const Wedlocked = () => {

  const wrapperRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        scroller: '.smooth-scroll',
        start: `top+=${(window.innerWidth / 100) * 21} top`,
        end: `bottom bottom+=${(window.innerWidth / 100) * 21}`,
        scrub: true
      }
    })

    tl.to(innerRef.current, {
      left: '-50%',
      ease: 'none'
    }, 0)

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <Wrapper id="wedlocked" ref={wrapperRef} data-scroll data-scroll-section>
      <Inner ref={innerRef} data-scroll data-scroll-sticky data-scroll-target="#wedlocked" data-scroll-offset={(window.innerWidth / 100) * 21}>
        <Title1>Wedlocked</Title1>
        <Title2>&</Title2>
        <Title3>Loaded</Title3>

        <Image1 src={Wedlocked1PNG} alt="Brandon in New York"/>
        <Image2 src={Wedlocked2PNG} alt="Brandon and Morgan"/>
        <Image3 src={Wedlocked3PNG} alt="Brandon and Morgan showing ring"/>
        <Image4 src={Wedlocked4PNG} alt="Morgan showing ring"/>
        <Image5 src={Wedlocked5PNG} alt="Morgan showing off her ring"/>

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
  background: linear-gradient(90deg, #D699A1 0%, #D296A1 100%);
  width: 100%;

  height: 190vw;
`

const Inner = styled.div`
  position: relative;
  background: linear-gradient(90deg, #D699A1 0%, #D296A1 100%);

  height: 95vw;
  width: 200vw;
`

const Title1 = styled.h2`
  ${text.desktop.h3}
  color: ${colors.roseIvory};
  position: absolute;

  top: 25.694vw;
  left: 2.083vw;
`

const Title2 = styled.h2`
  ${text.desktop.h1}
  color: ${colors.roseIvory};
  position: absolute;

  top: 35.486vw;
  left: 3.889vw;
`

const Title3 = styled.h2`
  ${text.desktop.h3}
  color: ${colors.roseIvory};
  position: absolute;

  top: 47.083vw;
  left: 41.181vw;
`

const Image1 = styled.img`
  position: absolute;
  mix-blend-mode: screen;

  left: 8.333vw;
  top: 24.306vw;
  width: 18.75vw;
  height: 25vw;
`

const Image2 = styled.img`
  position: absolute;
  mix-blend-mode: screen;

  width: 29.583vw;
  height: 22.292vw;
  top: 38.056vw;
  left: 29.792vw;
`

const Image3 = styled.img`
  position: absolute;
  mix-blend-mode: screen;

  width: 18.75vw;
  height: 25vw;
  top: 28.681vw;
  left: 62.153vw;
`

const Image4 = styled.img`
  position: absolute;
  mix-blend-mode: screen;

  width: 18.681vw;
  height: 24.861vw;
  top: 46.528vw;
  left: 83.819vw;
`

const Image5 = styled.img`
  position: absolute;
  mix-blend-mode: screen;

  width: 18.75vw;
  height: 24.972vw;
  top: 27.014vw;
  left: 105.278vw;
`

const Text = styled.p`
  ${text.desktop.body}
  position: absolute;
  color: ${colors.roseIvory};

  width: 53.889vw;
  left: 72.917vw;
  top: 73.472vw;
`
