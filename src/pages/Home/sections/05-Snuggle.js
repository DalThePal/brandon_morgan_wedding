import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import colors from 'styles/colors'
import text from 'styles/text'

const Snuggle = () => {

  const wrapperRef  = useRef(null)
  const vr1Ref      = useRef(null)
  const vr2Ref      = useRef(null)
  const line1Ref    = useRef(null)
  const line2Ref    = useRef(null)
  const line3Ref    = useRef(null)
  const line4Ref    = useRef(null)
  const line5Ref    = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: '.smooth-scroll',
        trigger: wrapperRef.current,
        start: `top-=${(window.innerWidth / 100) * 9} bottom-=${(window.innerWidth / 100) * 20}`, 
        end: `bottom+=${(window.innerWidth / 100) * 35} bottom`,
        scrub: true
      }
    })

    tl.to(vr1Ref.current, {
      duration: 1,
      height: '0%',
      ease: 'none',
    }, 0)

    tl.to(line1Ref.current, {
      duration: 0.5,
      ease: 'none',
      attr: {
        x2: "0%"
      }
    }, 1)

    tl.to(line2Ref.current, {
      duration: 0.5,
      ease: 'none',
      attr: {
        x1: "100%"
      }
    }, 1)

    tl.to([line3Ref.current, line4Ref.current], {
      duration: 1,
      ease: 'none',
      attr: {
        y1: '100%'
      }
    }, 1.5)

    tl.to(line5Ref.current, {
      duration: 0.5,
      ease: 'none',
      attr: {
        x1: '50%',
        x2: "50%"
      }
    }, 2.5)

    tl.to(vr2Ref.current, {
      duration: 1,
      ease: 'none',
      height: "0vw"
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <Wrapper ref={wrapperRef} data-scroll-section>
      
      <VR1 ref={vr1Ref}/>
      <Border>
        <Line ref={line1Ref} x1={"0%"}   x2={"50%"}  y1={"0%"}   y2={"0%"}   />
        <Line ref={line2Ref} x1={"50%"}  x2={"100%"} y1={"0%"}   y2={"0%"}   />
        <Line ref={line3Ref} x1={"0%"}   x2={"0%"}   y1={"0%"}   y2={"100%"} />
        <Line ref={line4Ref} x1={"100%"} x2={"100%"} y1={"0%"}   y2={"100%"} />
        <Line ref={line5Ref} x1={"0%"}   x2={"100%"} y1={"100%"} y2={"100%"} />
      </Border>
      <VR2 ref={vr2Ref}/>

      <Text>
        Morgan and Brandon spent the next 3 years 
        snuggling their two large hound dogs, taking 
        trips, making new friends while enjoying old 
        ones, 
      </Text>
    </Wrapper>
  )
}

export default Snuggle

const Wrapper = styled.section`
  position: relative;
  z-index: 3;
  width: 100%;

  height: 66.944vw;
`

const Text = styled.p`
  ${text.desktop.h6}
  position: absolute;
  color: ${colors.roseIvory};
  left: 50%;
  transform: translateX(-50%);

  width: 83.333vw;
  top: 17.361vw;
`

const Border = styled.svg`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  top: 13.889vw;
  width: 90.278vw;
  height: 46.111vw;
`

const Line = styled.line`
  stroke: ${colors.roseIvory};
  stroke-width: 0.069vw;
`

const VR = styled.div`
  position: absolute;
  background-color: ${colors.roseIvory};
  left: 50%;
  transform: translateX(-50%);

  width: 0.069vw;
`

const VR1 = styled(VR)`
  height: 24.306vw;
  bottom: 53.056vw;
`

const VR2 = styled(VR)`
  height: 20.833vw;
  bottom: -13.889vw;
`
