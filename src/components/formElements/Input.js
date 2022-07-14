import React from 'react'
import styled from 'styled-components'

import text from 'styles/text'
import colors from 'styles/colors'
import media from 'styles/media'

import { ReactComponent as ErrorSVG } from 'images/error.svg'

const Input = ({ value, setValue, type, required, disabled, error }) => {

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Wrapper>
      {error && <Error/>}
      <StyledInput 
        disabled={disabled}
        required={required}
        onChange={(e) => handleChange(e)} 
        value={value}
        type={type}
      />
    </Wrapper>
  )
}

export default Input

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const StyledInput = styled.input`
  border: 1px solid ${colors.roseIvory};
  ${text.desktop.nav}
  color: ${colors.roseIvory};
  outline: none;
  background: #C78E98;
  background-color: #C78E98;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  vertical-align: middle;

  height: 2.78vw;
  padding: 0vw 0.69vw;

  ${media.mobile} {
    height: 10.67vw;
    padding: 0vw 2.13vw;
  }
`

const Error = styled(ErrorSVG)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 1.67vw;
  height: 1.67vw;

  ${media.mobile} {
    width: 6.4vw;
    height: 6.4vw;
  }
`
