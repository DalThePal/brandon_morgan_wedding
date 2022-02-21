import React from 'react'
import styled from 'styled-components'

import text from 'styles/text'
import colors from 'styles/colors'


const Hero = () => {
  return (
    <Wrapper data-scroll-section>
      <Container>
        <H1>Travel</H1>
      </Container>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  width: 100%;
  height: 51.111vw;

  padding-top: 12.153vw;
  padding-left: 7.222vw;
  padding-right: 7.222vw;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  border-top: 0.069vw solid ${colors.roseIvory};
  border-bottom: 0.069vw solid ${colors.roseIvory};
`

const H1 = styled.h1`
  ${text.desktop.h2}
  color: ${colors.roseIvory};
`
