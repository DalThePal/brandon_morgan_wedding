import React from 'react'
import styled from 'styled-components'

import text   from 'styles/text'
import colors from 'styles/colors'
import media  from 'styles/media'

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

  ${media.mobile} {
    height: 189.333vw;
    padding-top: 26.667vw;
    padding-left: 5.333vw;
    padding-right: 5.333vw;
  }
`

const Container = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  width: 100%;
  border-color: ${colors.roseIvory};
  border-style: solid;

  border-top-width: 0.069vw;
  border-bottom-width: 0.069vw;

  ${media.mobile} {
    height: 162.4vw;
    border-top-width: 0.267vw;
    border-bottom-width: 0.267vw;
  }
`

const H1 = styled.h1`
  ${text.desktop.h2}
  color: ${colors.roseIvory};

  ${media.mobile} {
    ${text.mobile.h4}   
    position: relative;
    left: 47%;
    top: 2%;
    transform: rotate(90deg);
    transform-origin: 0% 0%;
  }
`

const Plane = styled.img`
  position: absolute;
  z-index: 1;
  transform: scaleX(-1);

  height: 27.708vw;
  width: 28.472vw;
  top: 12.153vw;
  right: 1.389vw;

  ${media.mobile} {
    transform: scaleX(1);
    height: 134.133vw;
    width: 138.4vw;
    top 48.267vw;
    right: 5.333vw;
  }
`