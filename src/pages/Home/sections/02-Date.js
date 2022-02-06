import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import text from 'styles/text'

const Date = () => {
  return (
    <Wrapper data-scroll-section>
      <SubText>WE'RE SAYING I DO</SubText>
      <Title>September 10th, 2022</Title>
    </Wrapper>
  )
}

export default Date

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 34.722vw;
  height: 78.333vw;
`

const SubText = styled.h3`
  ${text.desktop.body};
  color: ${colors.roseIvory};

  margin-bottom: 2.639vw;
`

const Title = styled.h2`
  ${text.desktop.h4}
  color: ${colors.roseIvory};
  text-align: center;

  width: 83.333vw;
`
