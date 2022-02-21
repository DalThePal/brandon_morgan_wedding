import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import media  from 'styles/media'

import { ReactComponent as ArrowSVG } from 'images/arrow.svg'

const Arrows = ({ trigger, left, color }) => {
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
      <Arrow ref={arrow1Ref} $color={color}/>
      <Arrow2 ref={arrow2Ref} $color={color}/> 
    </ArrowOverflow>
  )
}
 
export default Arrows

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

  path {
    fill: ${props => props.$color};
  }
`

const Arrow2 = styled(Arrow)`
  top: 100%;
  left: -100%;
`