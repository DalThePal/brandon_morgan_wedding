import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const Animation = ({children, height, trigger, duration}) => {

  const innerRef = useRef(null)

  useEffect(() => {
    if (trigger) {
      gsap.to(innerRef.current, {
        duration,
        top: '0%'
      })
    } else {
      gsap.to(innerRef.current, {
        duration,
        top: '150%'
      })
    }
  }, [trigger, duration])

  return (
    <Wrapper height={height}>
      <Inner ref={innerRef}>{children}</Inner>
    </Wrapper>
  )
}

export default Animation

const Inner = styled.span`
  position: absolute;
  top: 150%;
`

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  height: ${props => props.height};
  width: 100%;

  ${Inner} {
    height: ${props => props.height};
  }
`
