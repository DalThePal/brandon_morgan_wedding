import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import text from 'styles/text'
import media from 'styles/media'

const Button = ({children, onClick, type, disabled}) => {
  return ( 
    <Wrapper onClick={onClick} type={type} disabled={disabled}>
      {children}
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.roseIvory};
  color: ${colors.mauve800};
  ${text.desktop.nav}
  width: 100%;
  cursor: pointer;

  height: 3.47vw;
  border-radius: 3.47vw;
  margin-top: 1.39vw;

  ${media.mobile} {
    height: 13.07vw;
    border-radius: 13.33vw;
    margin-top: 0vw;
    ${text.mobile.nav}
  }
`
