import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const Animation = ({children, height, trigger, duration}) => {

  const wrapperRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {

    const tl1 = gsap.timeline({
      paused: true
    })

    tl1.to(innerRef.current, {
      duration,
      top: '0%'
    }, 0)
    tl1.to(wrapperRef.current, {
      overflow: 'visible'
    }, duration)

    const tl2 = gsap.timeline({
      paused: true
    })

    tl2.set(wrapperRef.current, {
      overflow: 'hidden'
    }, 0)
    tl2.to(innerRef.current, {
      duration,
      top: '150%'
    }, 0)

    if (trigger) {
      tl2.kill()
      tl1.play(0)
    } else {
      tl1.kill()
      tl2.play(0)
    }

    return () => {
      tl1.kill()
      tl2.kill()
    }
  }, [trigger, duration])

  return (
    <Wrapper ref={wrapperRef} height={height}>
      <Inner ref={innerRef}>{children}</Inner>
    </Wrapper>
  )
}

export default Animation

const Inner = styled.span`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
