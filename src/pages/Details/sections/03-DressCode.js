import React from "react"
import styled from 'styled-components'

import text from "styles/text"
import colors from "styles/colors"

const DressCode = () => {
  return (
    <Wrapper data-scroll-section>
      <Inner>
        <Title>DrESS COdE</Title>
        <Content>
          <Kicker>Semi-Formal Attire</Kicker>
          <Text>
            Brandon says you have to (at least) wear pants. 
            All are welcome to wear whatever they feel most 
            comfortable in, but guests are encouraged to 
            wear semi-formal attire. 
          </Text>
        </Content>
      </Inner>
    </Wrapper>
  )
}

export default DressCode

const Wrapper = styled.section`
  height: 59.17vw;
  padding-top: 17.36vw;
`

const Inner = styled.div`
  position: relative;

  height: 41.81vw;
`

const Title = styled.h3`
  ${text.desktop.h2}
  color: ${colors.roseIvory};

  width: 137.39vw;
  top: 0vw;
`

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  top: 30.56vw;
  left: 40.63vw;
`

const Kicker = styled.p`
  ${text.desktop.h7}
  color: ${colors.roseIvory};

  margin-bottom: 1.39vw;
`

const Text = styled.p`
  ${text.desktop.body}
  color: ${colors.roseIvory};

  width: 40.28vw;
`
