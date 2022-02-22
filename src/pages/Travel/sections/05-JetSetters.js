import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import text   from 'styles/text'
import media  from 'styles/media'

const JetSetters = () => {
  return (
    <Wrapper data-scroll-section>
      <P>IF YOU PLAN TO JET SET</P>
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

  ${media.mobile} {
    height: 241.333vw;
    padding-top: 91.2vw;
  }
`

const P = styled.p`
  ${text.desktop.body}
  color: ${colors.roseIvory};
  text-align: center;
  
  margin-bottom: 3.472vw;

  ${media.mobile} {
    ${text.mobile.body}
    margin-bottom: 5.333vw;
  }
`

const H6 = styled.h6`
  ${text.desktop.h6}
  color: ${colors.roseIvory};
  text-align: center;

  width: 83.333vw;

  ${media.mobile} {
    ${text.mobile.h2}
    width: 89.067vw;
  }
`
