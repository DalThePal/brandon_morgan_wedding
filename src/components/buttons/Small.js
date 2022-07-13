import React from 'react'
import styled from 'styled-components'

import text from 'styles/text'

const Small = ({children, color, backgroundColor, onClick}) => {
  return (
    <Wrapper color={color} backgroundColor={backgroundColor} onClick={onClick}>
      {children}
    </Wrapper>
  )
}

export default Small

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  transition: 500ms;
  background: ${props => props.backgroundColor};
  color: ${props => props.color};
  ${text.desktop.nav}
  vertical-align: middle;

  line-height: 0.9vw;
  height: 3.4vw;
  padding: 1.20vw 3.47vw;
  border-radius: 3.47vw;
`
