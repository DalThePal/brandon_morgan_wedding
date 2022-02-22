import React from 'react'
import styled from 'styled-components'

import text   from 'styles/text'
import colors from 'styles/colors'
import media  from 'styles/media'

const RSVP = () => {
  return (
    <Wrapper >
      <H2>rSVP</H2>
      <P>
        Check back once you recieve your formal invite. 
        Options to RSVP will be available here after 
        formal invitations are sent.
      </P>
    </Wrapper>
  )
}

export default RSVP

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 76.389vw;
  padding-top: 20.833vw;

  ${media.mobile} {
    height: 149.333vw;
    padding-top: 40vw;
  }
`

const H2 = styled.h2`
  ${text.desktop.h1}
  color: ${colors.roseIvory};

  ${media.mobile} {
    ${text.mobile.h4}
    margin-bottom: 2.667vw;
  }
`

const P = styled.p`
  ${text.desktop.body}
  color: ${colors.roseIvory};
  text-align: center;

  width: 45.833vw;

  ${media.mobile} {
    ${text.mobile.body}
    width: 89.333vw;
  }
`
