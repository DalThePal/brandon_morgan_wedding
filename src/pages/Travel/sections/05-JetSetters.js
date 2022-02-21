import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import text from 'styles/text'

const JetSetters = () => {
  return (
    <Wrapper data-scroll-section>
      <P>FOR YOU JET-SETTERS</P>
      <H6>
        Fly into Salt Lake City International Airport, 
        just 5-10 minutes from downtown SLC!
      </H6>
    </Wrapper>
  )
}

export default JetSetters

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 17.361vw;
  height: 49.028vw;
`

const P = styled.p`
  ${text.desktop.body}
  color: ${colors.roseIvory};
  text-align: center;
  
  margin-bottom: 3.472vw;
`

const H6 = styled.h6`
  ${text.desktop.h6}
  color: ${colors.roseIvory};
  text-align: center;

  width: 83.333vw;
`
