import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import text from 'styles/text'

const Hero = () => {
  return (
    <Wrapper data-scroll-section>
      <Title1>Morgan</Title1>
      <Title2>&</Title2>
      <Title3>Brandon</Title3>
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
  color: ${colors.roseIvory};

  top: 10.417vw;
  left: 11.25vw;
`

const Title2 = styled.h2`
  ${text.desktop.h2}
  position: absolute;
  color: ${colors.roseIvory};

  top: 17.014vw;
  left: 17.639vw;
`

const Title3 = styled.h2`
  ${text.desktop.h4}
  position: absolute;
  color: ${colors.roseIvory};

  top: 33.333vw;
  left: 32.014vw;
`
