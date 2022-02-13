import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import colors from 'styles/colors'

const PathFiller = () => {

  const wrapperRef  = useRef(null)
  const vrRef       = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: '.smooth-scroll',
        trigger: wrapperRef.current,
        start: `top bottom-=${(window.innerWidth / 100) * 20}`,
        end: `bottom+=${(window.innerWidth / 100) * 20} bottom`,
        scrub: true,
      }
    })

    tl.to(vrRef.current, {
      height: '0%',
      ease: "none"
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <Wrapper ref={wrapperRef} data-scroll-section>
      <VR ref={vrRef}/>
    </Wrapper>
  )
}

export default PathFiller

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  height: 31.25vw;
`

const VR = styled.div`
  background-color: ${colors.roseIvory};
  height: 100%;

  width: 0.069vw;
`
