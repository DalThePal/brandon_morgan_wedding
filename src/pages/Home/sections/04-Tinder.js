import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import colors, { gradients } from 'styles/colors'
import text from 'styles/text'

import CloudPNG from 'images/cloud.png'
import TinderPNG from 'images/tinder.png'

const Tinder = () => {

  const cloud1Ref = useRef(null)
  const cloud2Ref = useRef(null)
  const cloud3Ref = useRef(null)

  const mouseMove = (e) => {
    gsap.to([cloud1Ref.current, cloud2Ref.current, cloud3Ref.current], {
      stagger: 0.02,
      x: -e.clientX / 50,
      y: -e.clientY / 50
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <Wrapper data-scroll-section>
      <Cloud1 ref={cloud1Ref} src={CloudPNG} alt="cloud"/>
      <Cloud2 ref={cloud2Ref} src={CloudPNG} alt="cloud"/>
      <Cloud3 ref={cloud3Ref} src={CloudPNG} alt="cloud"/>

      <Title>A rekindled tinder</Title>
      <Text>
        One summer night in 2018, the connection was rekindled by a 
        Tinder “super-like” and an impulsive Facebook Message. After 
        a few laughter-filled dinner dates, the two realized their 
        “match” just might really be perfect.
      </Text>

      <Img src={TinderPNG} alt="a rekindled tinder"/>
    </Wrapper>
  )
}

export default Tinder

const Wrapper = styled.section`
  position: relative;
  background: ${gradients.darkPink};
  width: 100%;

  height: 117.083vw;
`

const Cloud1 = styled.img`
  position: absolute;
  transform: rotate(180deg) scaleX(-1);

  left: -7.361vw;
  top: 14.722vw;
  height: 21.319vw;
  width: 37.292vw;
`

const Cloud2 = styled.img`
  position: absolute;
  transform: scaleX(-1);

  left -2.153vw;
  top: 23.611vw;
  height: 33.264vw;
  width: 58.264vw;
`

const Cloud3 = styled.img`
  position: absolute;
  transform: rotate(180deg);

  right: -17.639vw;
  top: 6.944vw;
  width: 88.75vw;
  height: 50.764vw;
`

const Title = styled.h2`
  ${text.desktop.h5}
  position: absolute;
  color: ${colors.roseIvory};

  width: 51.319vw;
  right: 8.056vw;
  top: 74.375vw;
`

const Text = styled.p`
  ${text.desktop.body}
  position: absolute;
  color: ${colors.roseIvory};

  width: 40.417vw;
  right: 9.583vw;
  top: 94.861vw;
`

const Img = styled.img`
  position: absolute;
  object-fit: cover;
  mix-blend-mode: screen;

  width: 29.514vw;
  height: 55.556vw;
  left: 8.333vw;
  top: 61.528vw;
`
