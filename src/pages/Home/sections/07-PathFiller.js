import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import { useMedia } from 'utils/hooks'

import colors from 'styles/colors'
import media from 'styles/media'

const PathFiller = () => {

  const wrapperRef  = useRef(null)
  const vrRef       = useRef(null)

  const scrollStart = useMedia(
    `top bottom-=${(window.innerWidth / 100) * 20}`,
    `top bottom-=${(window.innerWidth / 100) * 20}`,
    `top bottom-=${(window.innerWidth / 100) * 20}`,
    `top bottom-=${(window.innerWidth / 100) * 166}`
  )

  const scrollEnd = useMedia(
    `bottom+=${(window.innerWidth / 100) * 20} bottom`,
    `bottom+=${(window.innerWidth / 100) * 20} bottom`,
    `bottom+=${(window.innerWidth / 100) * 20} bottom`,
    `bottom+=${(window.innerWidth / 100) * 165} bottom`
  )

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: '.smooth-scroll',
        trigger: wrapperRef.current,
        start: scrollStart,
        end: scrollEnd,
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
  }, [scrollStart, scrollEnd])

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

  ${media.mobile} {
    margin-top: 26.667vw;
    height: 120vw;
  }
`

const VR = styled.div`
  background-color: ${colors.roseIvory};
  height: 100%;

  width: 0.069vw;

  ${media.mobile} {
    width: 0.267vw;
  }
`
