import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import text   from 'styles/text'
import media  from 'styles/media'

const Secondary = ({ children, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      {children}
    </Wrapper>
  )
}

export default Secondary

const Wrapper = styled.div`
  ${text.desktop.nav}
  color: ${colors.roseIvory};
  border-style: solid;
  border-color: ${colors.roseIvory};
  cursor: pointer;
  width: fit-content;
  
  border-width: 0.069vw;
  border-radius: 5.208vw;
  padding: 1.389vw 6.944vw;

  ${media.mobile} {
    ${text.mobile.nav}
    border-width: 0.267vw;
    border-radius: 20vw;
    padding: 5.333vw 26.667vw;
  }
`
