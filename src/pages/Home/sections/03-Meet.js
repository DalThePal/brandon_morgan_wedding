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

      <ImageWrapper>
        <Img src={MeetPNG} alt="Morgan meets Brandon"/>
      </ImageWrapper>
    </Wrapper>
  )
}

export default Meet

const Wrapper = styled.section`
  position: relative;
  z-index: 3;
  width: 100%;

  height: 74.861vw;
`

const Title = styled.h3`
  ${text.desktop.h5}
  position: absolute;
  z-index: 2;
  color: ${colors.roseIvory};

  left: 8.333vw;
  top: 32.986vw;
`

const Text = styled.p`
  ${text.desktop.body}
  position: absolute;
  z-index: 2;
  color: ${colors.roseIvory};

  top: 44.097vw;
  left: 19.097vw;
  width: 40.278vw;
  height: 10.417vw
`

const ImageWrapper = styled.div`
  position: absolute;
  z-index: 1;
  opacity: 0.75;
  background: ${gradients.darkPink};

  width: 40.278vw;
  height: 52.083vw;
  top: 13.819vw;
  right: 8.333vw;
`

const Img = styled.img`
  mix-blend-mode: screen;
  object-fit: cover;

  width: 100%;
  height: 100%;
`
