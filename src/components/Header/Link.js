import React, { useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import text from 'styles/text'
import colors from 'styles/colors'
import media from 'styles/media'

const Link = ({children, width, disabled}) => {

  const lineRef = useRef(null)

  const mouseEnter = () => {
    if (!disabled) {
      gsap.to(lineRef.current, {
        duration: 0.5,
        width: '0%'
      })
    }
  }   

  const mouseLeave = () => {
    if (!disabled) {
      gsap.to(lineRef.current, {
        duration: 0.5,
        width: '100%'
      })
    }
  }

  return (
    <Wrapper width={width} disabled={disabled} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      {children}
      {!disabled && <CrossThrough ref={lineRef}/>}
    </Wrapper>
  )
}

export default Link

const CrossThrough = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${colors.mauve600};
  width: 100%;

  height: 0.694vw;

  ${media.mobile} {
    height: 1.333vw;
  }
`

const Wrapper = styled.div`
  ${text.desktop.h4}
  color: ${props => props.disabled ? colors.mauve50 : colors.mauve600};
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${props => props.width};
  margin-bottom: 3.472vw;

  ${media.mobile} {
    ${text.mobile.h6}
    margin-bottom: 20vw;
    width: 100%;
  }
`
