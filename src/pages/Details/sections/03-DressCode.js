import React, { useRef, useEffect, useContext } from "react"
import styled from 'styled-components'
import gsap from 'gsap/all'

import text from "styles/text"
import colors from "styles/colors"
import media from 'styles/media'

import { useMedia } from 'utils/hooks'

import { ScreenContext } from "components/Providers"

const DressCode = () => {

  const wrapperRef = useRef(null)
  const innerRef = useRef(null)
  const titleRef = useRef(null)
  const { mobile } = useContext(ScreenContext)

  const scrollStart = useMedia(
    `top+=${(window.innerWidth / 100) * 5} top`,
    `top+=${(window.innerWidth / 100) * 5} top`,
    `top+=${(window.innerWidth / 100) * 5} top`,
    `top top`
  )

  const scrollEnd = useMedia(
    `bottom bottom+=${(window.innerWidth / 100) * 5}`,
    `bottom bottom+=${(window.innerWidth / 100) * 5}`,
    `bottom bottom+=${(window.innerWidth / 100) * 5}`,
    `bottom bottom+=${(window.innerWidth / 100) * 10}`
  )

  const titleLeft = useMedia('-30%', '-30%', '-30%', '-75%')

  useEffect(() => {
    if (titleRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: scrollStart,
          end: scrollEnd,
          pin: innerRef.current,
          scrub: true,
        }
      })
    
      tl.to(titleRef.current, {
        x: titleLeft,
        ease: 'none'
      }, 0)
  
      return () => {
        tl.kill()
      }
    }
  }, [scrollStart, scrollEnd, titleLeft, mobile])

  return (
    <Wrapper ref={wrapperRef}>
      <Inner ref={innerRef}>
        {!mobile && <Title ref={titleRef}>DrESS COdE</Title>}
        {mobile && <MobileTitleWrapper ref={titleRef}>
          <Title>dress</Title>
          <Title paddingLeft={'38.13vw'}>code</Title>
        </MobileTitleWrapper>}
        <Content>
          <Kicker>Semi-Formal Attire</Kicker>
          <Text>
            Brandon says you have to (at least) wear pants. 
            All are welcome to wear whatever they feel most 
            comfortable in, but guests are encouraged to 
            wear semi-formal attire. 
          </Text>
        </Content>
      </Inner>
    </Wrapper>
  )
}

export default DressCode

const Wrapper = styled.section`
  height: 200vw;
  padding-top: 17.36vw;

  ${media.mobile} {
    height: 200vh;
    padding-top: 40vw;
  }
`

const Inner = styled.div`
  position: relative;

  height: 41.81vw;

  ${media.mobile} {
    height: 187.73vw;
  }
`

const MobileTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const Title = styled.h3`
  position: relative;
  ${text.desktop.h2}
  color: ${colors.roseIvory};

  width: 137.39vw;

  ${media.mobile} {
    ${text.mobile.h4}
    padding-left: ${props => props.paddingLeft};
    width: 134.67vw;
  }
`

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  top: 30.56vw;
  left: 40.63vw;

  ${media.mobile} {
    left: 5.33vw;
    top: 110.33vw;
    width: 89.33vw;
  }
`

const Kicker = styled.p`
  ${text.desktop.h7}
  color: ${colors.roseIvory};

  margin-bottom: 1.39vw;

  ${media.mobile} {
    ${text.mobile.h7}
    margin-bottom: 2.67vw;
  }
`

const Text = styled.p`
  ${text.desktop.body}
  color: ${colors.roseIvory};

  width: 40.28vw;

  ${media.mobile} {
    ${text.mobile.body}
    width: 100%;
  }
`
