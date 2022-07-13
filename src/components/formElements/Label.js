import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import text from 'styles/text'

const Label = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Label

const Wrapper = styled.label`
  ${text.desktop.nav}
  line-height: 115%;
  color: ${colors.mauve800};
`
