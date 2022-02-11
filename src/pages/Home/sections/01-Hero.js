import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import TextAnimation from 'components/TextAnimation'

import colors from 'styles/colors'
import text from 'styles/text'

import CloudPNG from 'images/cloud.png'
import DiamondMP4 from 'images/diamond.mp4'

const Hero = () => {
  const diamondRef = useRef(null)
  const cloud1Ref = useRef(null)
  const cloud2Ref = useRef(null)
  const cloud3Ref = useRef(null)

  const mouseMove = e => {
    gsap.to([cloud1Ref.current, cloud2Ref.current, cloud3Ref.current], {
      stagger: 0.02,
      x: -e.clientX / 50,
      y: -e.clientY / 50
    })
  }

  useEffect(() => {
    diamondRef.current.play()
    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <Wrapper data-scroll-section>
      <Title1>
        <TextAnimation height="12.5vw">Morgan</TextAnimation>
      </Title1>
      <Title2>
        <TextAnimation height="25vw">&</TextAnimation>
      </Title2>
      <Title3><TextAnimation height="12.5vw">Brandon</TextAnimation></Title3>

      <Cloud1 ref={cloud1Ref} src={CloudPNG} alt="cloud"/>
      <Cloud2 ref={cloud2Ref} src={CloudPNG} alt="cloud"/>
      <Cloud3 ref={cloud3Ref} src={CloudPNG} alt="cloud"/>

      <Diamond ref={diamondRef} muted loop src={DiamondMP4} alt="diamond"/>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 56.25vw;
`

const Title1 = styled.h1`
  ${text.desktop.h4}
  position: absolute;
  z-index: 1;
  color: ${colors.roseIvory};

  width: 46.181vw;
  top: 10.417vw;
  left: 11.25vw;
`

const Title2 = styled.h2`
  ${text.desktop.h2}
  z-index: 1;
  position: absolute;
  color: ${colors.roseIvory};

  width: 31.944vw;
  top: 17.014vw;
  left: 17.639vw;
`

const Title3 = styled.h2`
  ${text.desktop.h4}
  position: absolute;
  z-index: 1;
  color: ${colors.roseIvory};

  width: 52.847vw;
  top: 33.333vw;
  left: 32.014vw;
`

const Cloud1 = styled.img`
  position: absolute;
  z-index: 1;

  right: -0.625vw;
  top: 54.444vw;
  width: 58.264vw;
  height: 33.264vw;
`

const Cloud2 = styled.img`
  position: absolute;
  transform: rotate(180deg);
  z-index: 1;

  top: 37.778vw;
  left: -19.167vw;
  width: 88.75vw;
  height: 50.764vw;
`

const Cloud3 = styled.img`
  position: absolute;
  transform: rotate(180deg);
  z-index: 1;

  right: -5.833vw;
  top: 45.556vw;
  width: 37.292vw;
  height: 21.319vw;
`

const Diamond = styled.video`
  width: 100vw;
  top: 0;
  left: 0;
  height: 56.25vw;
`
