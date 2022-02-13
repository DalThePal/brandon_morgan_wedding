import React from 'react'
import styled from 'styled-components'

import colors, { gradients } from 'styles/colors'
import text from 'styles/text'

import MeetPNG from 'images/meet.png'

const Meet = () => {
  return (
    <Wrapper data-scroll-section>
      <Title>The meet-cute</Title>
      <Text>
        Brandon first laid eyes on Morgan in the noisy kitchen of a 
        University of Utah college party house lovingly referred to 
        as “the 444.” (Mom and dad, we met at church). A few fleeting 
        glances and casually acquainted run-ins later, the two lost 
        touch as years passed.
      </Text>
      <Img src={MeetPNG} alt="Morgan meets Brandon"/>
    </Wrapper>
  )
}

export default Meet

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  background: ${gradients.darkPink};

  height: 74.861vw;
`

const Title = styled.h3`
  ${text.desktop.h5}
  position: absolute;
  color: ${colors.roseIvory};

  left: 8.333vw;
  top: 32.986vw;
`

const Text = styled.p`
  ${text.desktop.body}
  position: absolute;
  color: ${colors.roseIvory};

  top: 44.097vw;
  left: 19.097vw;
  width: 40.278vw;
  height: 10.417vw
`

const Img = styled.img`
  position: absolute;
  mix-blend-mode: screen;
  object-fit: cover;

  width: 40.278vw;
  height: 52.083vw;
  top: 13.819vw;
  right: 8.333vw;
`
