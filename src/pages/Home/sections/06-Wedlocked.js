import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const Wedlocked = () => {

  const wrapperRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        scroller: '.smooth-scroll',
        top: "top top",
        end: "bottom bottom",
        scrub: true
      }
    })

    tl.to(innerRef.current, {
      left: '-100%',
      ease: 'none'
    }, 0)

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <Wrapper id="wedlocked" ref={wrapperRef} data-scroll-section>
      <Inner ref={innerRef} data-scroll-sticky data-scroll-target="wedlocked">
        poopoos
      </Inner>
    </Wrapper>
  )
}

export default Wedlocked

const Wrapper = styled.section`
  position: relative;
  background: linear-gradient(90deg, #D699A1 0%, #D296A1 100%);
  width: 100%;

  height: 190vw;
`

const Inner = styled.div`
  position: relative;
  height: 95vw;
  width: 200vw;
`
