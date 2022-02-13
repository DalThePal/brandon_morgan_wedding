import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import colors from 'styles/colors'
import text from 'styles/text'

const Date = () => {

  const wrapperRef = useRef(null)
  const vrRef = useRef(null)

  useEffect(() => {
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        scroller: '.smooth-scroll',
        trigger: wrapperRef.current,
        start: `top-=${(window.innerWidth / 100) * 3} bottom-=${(window.innerWidth / 100) * 20}`,
        end: `bottom bottom+=${(window.innerWidth / 100) * 27}`,
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
  }, [])

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
`

const SubText = styled.h3`
  position: relative;
  z-index: 5;
  ${text.desktop.body};
  color: ${colors.roseIvory};

  margin-bottom: 2.639vw;
`

const Title = styled.h2`
  ${text.desktop.h4}
  color: ${colors.roseIvory};
  text-align: center;

  width: 83.333vw;
`

const VR = styled.div`
  background-color: ${colors.roseIvory};
  position: absolute;
  left: 50%;
  transform: translate(-50%);

  width: 0.069vw;
  height: 34.236vw;
  bottom: 47.778vw;
`
