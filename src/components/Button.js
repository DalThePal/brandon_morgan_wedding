import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import colors from 'styles/colors'
import text from 'styles/text'
import media from 'styles/media'

import { ReactComponent as ArrowSVG } from 'images/arrow.svg'

const Arrows = ({ trigger, left }) => {
  const arrow1Ref = useRef(null)
  const arrow2Ref = useRef(null)

  const [timeline, setTimeline] = useState(gsap.timeline())

  useEffect(() => {
    const tl = gsap.timeline({
      paused: true,
    })
      
    tl.to([arrow1Ref.current, arrow2Ref.current], {
      duration: 0.2,
      y: '-100%',
      x: '100%'
    })

    setTimeline(tl)

    return () => {
      tl.kill()
    }
  }, [])

  useEffect(() => {
    if (trigger) {
      timeline.play()
    } else {
      timeline.reverse()
    }
  }, [trigger, timeline])

  return (
    <ArrowOverflow left={left}>
      <Arrow ref={arrow1Ref}/>
      <Arrow2 ref={arrow2Ref}/> 
    </ArrowOverflow>
  )
}

const Button = ({ children, onClick }) => {

  const [trigger, setTrigger] = useState(false)

  return (
    <Wrapper onMouseEnter={() => setTrigger(true)} onMouseLeave={() => setTrigger(false)} onClick={onClick}>
      <Arrows left trigger={trigger}/>
      {children}
      <Arrows trigger={trigger}/>
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.div`
  ${text.desktop.nav}
  background-color: ${colors.pink400};
  color: ${colors.mauve600};
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: fit-content;

  height: 4.931vw;
  border-radius: 5.208vw;
  padding: 1.389vw 2.083vw;

  ${media.mobile} {
    ${text.mobile.nav}
    height: 18.933vw;
    border-radius: 20vw;
    padding: 5.333vw 8vw;
  }
`

const ArrowOverflow = styled.div`
  position: relative;
  overflow: hidden;

  width: 2.153vw;
  height: 2.153vw;
  margin-left: ${props => !props.left ? '2.083vw' : '0vw'};
  margin-right: ${props => props.left ? '2.083vw' : '0vw'};

  ${media.mobile} {
    width: 8.267vw;
    height: 8.267vw;
    margin-left: ${props => !props.left ? '8vw' : '0vw'};
    margin-right: ${props => props.left ? '8vw' : '0vw'};
  }
`

const Arrow = styled(ArrowSVG)`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Arrow2 = styled(Arrow)`
  top: 100%;
  left: -100%;
`
