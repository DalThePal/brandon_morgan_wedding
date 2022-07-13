import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import text from 'styles/text'

import Form from '../components/Form'

const Hero = () => {
  return (
    <Wrapper data-scroll-section>
      <Title>RSVP bELOw</Title>
      <Text>We hope you can join us!</Text>
      <Form/>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 71.74vw;
  padding: 7.64vw 0vw 6.94vw;
`

const Title = styled.h1`
  text-align: center;
  color: ${colors.roseIvory};
  ${text.desktop.h5}
`

const Text = styled.p`
  text-align: center;
  color: ${colors.mauve800};
  ${text.desktop.body}

  margin-bottom: 2.08vw;
`
