import React from 'react'
import styled from 'styled-components'

import text   from 'styles/text'
import colors from 'styles/colors'

const RSVP = () => {
  return (
    <Wrapper data-scroll-section>
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
`

const H2 = styled.h2`
  ${text.desktop.h1}
  color: ${colors.roseIvory};
`

const P = styled.p`
  ${text.desktop.body}
  color: ${colors.roseIvory};
  text-align: center;

  width: 45.833vw;
`