import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import text from 'styles/text'

const Hotels = () => {
  return (
    <Wrapper data-scroll-section>
      <H6>
        While you’re welcome to reserve lodging wherever 
        you feel most comfortable, we’d like to suggest some options.
      </H6>
      <UL>

      </UL>
    </Wrapper>
  )
}

export default Hotels

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 52.153vw;
  padding-top: 20.833vw;
  padding-left: 8.333vw;
  padding-right: 8.333vw;
`

const H6 = styled.h6`
  ${text.desktop.h7}
  color: ${colors.roseIvory};

  width: 61.806vw;
  margin-bottom: 3.472vw;
`

const UL = styled.ul`
  width: 100%;
`
