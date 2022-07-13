import React, { useRef, useEffect } from "react"
import styled from 'styled-components'
import gsap from 'gsap'

import text from "styles/text"
import colors from "styles/colors"

import { useMedia } from 'utils/hooks'

const DressCode = () => {

  const wrapperRef = useRef(null)
  const titleRef = useRef(null)

  const scrollStart = useMedia(
    `top+=${(window.innerWidth / 100) * 5} top`,
    `top+=${(window.innerWidth / 100) * 5} top`,
    `top+=${(window.innerWidth / 100) * 5} top`,
    `top top+=${(window.innerWidth / 100) * 30}`
  )

  const scrollEnd = useMedia(
    `bottom bottom+=${(window.innerWidth / 100) * 5}`,
    `bottom bottom+=${(window.innerWidth / 100) * 5}`,
    `bottom bottom+=${(window.innerWidth / 100) * 5}`,
    `top top-=${(window.innerWidth / 100) * 200}`
  )

  const scrollOffset = useMedia(
    `${(window.innerWidth / 100) * 10}, ${(window.innerWidth / 100) * 21}`,
    `${(window.innerWidth / 100) * 0}, ${(window.innerWidth / 100) * 21}`,
    `${(window.innerWidth / 100) * 0}, ${(window.innerWidth / 100) * 21}`,
    `-${(window.innerWidth / 100) * 30}, ${(window.innerWidth / 100) * 35}`
  )

  const titleLeft = useMedia('-30%', '-30%', '-30%', '-205%')

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        scroller: '.smooth-scroll',
        start: scrollStart,
        end: scrollEnd,
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
  }, [scrollStart, scrollEnd, titleLeft])

  return (
    <Wrapper id="dress-code" ref={wrapperRef} data-scroll-section>
      <Inner data-scroll data-scroll-sticky data-scroll-target="#dress-code" data-scroll-offset={scrollOffset}>
        <Title ref={titleRef}>DrESS COdE</Title>
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
`

const Inner = styled.div`
  position: relative;

  height: 41.81vw;
`

const Title = styled.h3`
  position: relative;
  ${text.desktop.h2}
  color: ${colors.roseIvory};

  width: 137.39vw;
  top: 0vw;
`

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  top: 30.56vw;
  left: 40.63vw;
`

const Kicker = styled.p`
  ${text.desktop.h7}
  color: ${colors.roseIvory};

  margin-bottom: 1.39vw;
`

const Text = styled.p`
  ${text.desktop.body}
  color: ${colors.roseIvory};

  width: 40.28vw;
`
