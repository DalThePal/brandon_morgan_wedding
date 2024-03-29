import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import { useMedia } from 'utils/hooks'

import { VR } from 'components/Styled'

import media from 'styles/media'

const PathFiller = () => {

  const wrapperRef  = useRef(null)
  const vrRef       = useRef(null)

  const scrollStart = useMedia(
    `top bottom-=${(window.innerWidth / 100) * 20}`,
    `top bottom-=${(window.innerWidth / 100) * 20}`,
    `top bottom-=${(window.innerWidth / 100) * 20}`,
    `top bottom-=${(window.innerWidth / 100) * 132}`
  )

  const scrollEnd = useMedia(
    `bottom+=${(window.innerWidth / 100) * 20} bottom`,
    `bottom+=${(window.innerWidth / 100) * 20} bottom`,
    `bottom+=${(window.innerWidth / 100) * 20} bottom`,
    `bottom+=${(window.innerWidth / 100) * 130} bottom`
  )

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
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
    <Wrapper ref={wrapperRef}>
      <StyledVR ref={vrRef}/>
    </Wrapper>
  )
}

export default PathFiller

const Wrapper = styled.section`
  width: 100%;
  position: relative;

  height: 31.25vw;

  ${media.mobile} {
    margin-top: 26.667vw;
    height: 120vw;
  }
`

const StyledVR = styled(VR)`
  height: 100%;
  bottom: 0vw;
  left: 50%;
  transform: translateX(-50%);
`
