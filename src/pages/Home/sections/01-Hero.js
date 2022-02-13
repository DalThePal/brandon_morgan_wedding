import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import AppearAnimation from 'components/AppearAnimation'

import colors from 'styles/colors'
import text from 'styles/text'

import CloudPNG from 'images/cloud.png'
import DiamondMP4 from 'images/diamond.mp4'

const Hero = () => {
  const diamondRef = useRef(null)
  const cloud1Ref = useRef(null)
  const cloud2Ref = useRef(null)
  const cloud3Ref = useRef(null)

  const [title1Trigger, setTitle1Trigger] = useState(false)
  const [title2Trigger, setTitle2Trigger] = useState(false)
  const [title3Trigger, setTitle3Trigger] = useState(false)
  const [diamondTrigger, setDiamondTrigger] = useState(false)

  const mouseMove = e => {
    gsap.to([cloud1Ref.current, cloud2Ref.current, cloud3Ref.current], {
      stagger: 0.02,
      x: -e.clientX / 50,
      y: -e.clientY / 50
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMove)

    const tl = gsap.timeline({
      onComplete: () => {
        diamondRef.current.play()
      }
    })

    tl.call(setTitle2Trigger, [true], 1.2)
    tl.call(setTitle1Trigger, [true], 1.4)
    tl.call(setTitle3Trigger, [true], 1.5)
    tl.call(setDiamondTrigger, [true], 1)
    tl.to(diamondRef.current, {
      duration: 0.65,
      height: '56.25vw'
    }, 1)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <Wrapper data-scroll-section>
      <Title1>
        <AppearAnimation trigger={title1Trigger} duration={0.5} height="12.5vw">Morgan</AppearAnimation>
      </Title1>
      <Title2>
        <AppearAnimation trigger={title2Trigger} duration={0.5} height="25vw">&</AppearAnimation>
      </Title2>
      <Title3>
        <AppearAnimation trigger={title3Trigger} duration={0.5} height="12.5vw">Brandon</AppearAnimation>
      </Title3>

      <Cloud1 ref={cloud1Ref} src={CloudPNG} alt="cloud"/>
      <Cloud2 ref={cloud2Ref} src={CloudPNG} alt="cloud"/>
      <Cloud3 ref={cloud3Ref} src={CloudPNG} alt="cloud"/>

      <AppearAnimation trigger={diamondTrigger} duration={0.65} height={"45vw"}>
        <Diamond ref={diamondRef} muted loop controls={false} controlsList={false} src={DiamondMP4} alt="diamond"/>
      </AppearAnimation>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  .vsc-controller {
    display: none;
  }

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
  height: 5.25vw;
`
