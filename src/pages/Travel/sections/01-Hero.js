import React from 'react'
import styled from 'styled-components'

import text from 'styles/text'
import colors from 'styles/colors'

import PlanePNG from 'images/plane.png'

const Hero = () => {
  return (
    <Wrapper data-scroll-section>
      <Plane src={PlanePNG} alt="plane"/>
      <Container>
        <H1>Travel</H1>
      </Container>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  width: 100%;
  position: relative;

  height: 51.111vw;
  padding-top: 12.153vw;
  padding-left: 7.222vw;
  padding-right: 7.222vw;
`

const Container = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  width: 100%;

  border-top: 0.069vw solid ${colors.roseIvory};
  border-bottom: 0.069vw solid ${colors.roseIvory};
`

const H1 = styled.h1`
  ${text.desktop.h2}
  color: ${colors.roseIvory};
`

const Plane = styled.img`
  position: absolute;
  z-index: 1;
  transform: scaleX(-1);

  height: 27.708vw;
  width: 28.472vw;
  top: 12.153vw;
  right: 1.389vw;
`