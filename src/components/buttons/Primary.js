import React, { useState, useRef, useContext, useCallback } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import { ScreenContext } from 'components/Providers'

import colors from 'styles/colors'
import text   from 'styles/text'
import media  from 'styles/media'

import Arrows from 'components/Arrows'

const Primary = ({ children, onClick }) => {

  const screen = useContext(ScreenContext)

  const [trigger, setTrigger] = useState(false)

  const buttonRef = useRef(null)

  const mouseMove = useCallback((e) => {
    const clientRect = buttonRef.current?.getBoundingClientRect()
    const x = ((e.clientX) - clientRect.x - (clientRect.width / 2))
    const y = e.clientY - (clientRect.y) - (clientRect.height / 2)

    gsap.to(buttonRef.current, {
      duration: 1,
      x: x,
      y: y,
    })
  }, [])

  const onEnter = () => {
    if (!screen.mobile && !screen.tablet) {
      window.addEventListener("mousemove", mouseMove)
    }
  }

  const onLeave = () => {
    if (!screen.mobile && !screen.tablet) {
      window.removeEventListener("mousemove", mouseMove)

      gsap.to(buttonRef.current, {
        duration: 1,
        x: 0,
        y: 0,
      })
    }
  }

  return (
    <Wrapper onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={onClick}>
      <Button ref={buttonRef} onMouseEnter={() => setTrigger(true)} onMouseLeave={() => setTrigger(false)}>
        <Arrows left trigger={trigger} color={colors.mauve600}/>
        {children}
        <Arrows trigger={trigger} color={colors.mauve600}/>
      </Button>
    </Wrapper>
  )
}

export default Primary

const Wrapper = styled.div`

`

const Button = styled.div`
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
