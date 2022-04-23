import React, { useEffect, useState, useRef, useContext } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { RegistryContext } from './Providers'

import { useMedia } from 'utils/hooks'

import colors from 'styles/colors'
import media  from 'styles/media'

import Animation  from 'components/AppearAnimation'
import Primary    from 'components/buttons/Primary'
import Secondary  from 'components/buttons/Secondary'

const Registry = () => {
  const registry = useContext(RegistryContext)

  const bgRef         = useRef(null)
  const wrapperRef    = useRef(null)
  const secondaryRef  = useRef(null)

  const animationHeight = useMedia("4.931vw", "4.931vw", "4.931vw", "18.933vw")

  const [btn1Trigger, setBtn1Trigger] = useState(false)
  const [btn2Trigger, setBtn2Trigger] = useState(false)
  const openTl = useRef(gsap.timeline)

  useEffect(() => {
    const tl = gsap.timeline({
      paused: true,
      onReverseComplete: () => {
        window.scroller.paused(false)
      }
    })

    tl.set(wrapperRef.current, {
      display: 'flex'
    })

    tl.set(bgRef.current, {
      display: 'flex'
    })

    tl.to(bgRef.current, {
      duration: 0.2,
      opacity: 0.75
    }, 0)

    tl.to(wrapperRef.current, {
      duration: 0.2,
      opacity: 1
    }, 0)

    tl.to(secondaryRef.current, {
      duration: 0.2,
      ease: 'none',
      y: '0%'
    }, 0.2)

    tl.call(setBtn1Trigger, [true], 0.4)
    tl.call(setBtn2Trigger, [true], 0.4)

    openTl.current = tl

    return () => {
      tl.kill()
    }
  }, [])

  useEffect(() => {
    if (registry.state) {
      window.scroller.paused(true)
      openTl.current.play()
    } else {
      setBtn1Trigger(false)
      setBtn2Trigger(false)
      openTl.current.reverse()
    }
  }, [registry])

  const buttonClick = (href) => {
    window.open(href, '__blank')
  }

  return (
    <>
      <BG ref={bgRef}/>
      <Wrapper ref={wrapperRef}>
        <SecondaryWrapper ref={secondaryRef}>
          <Secondary onClick={() => registry.setState(false)}>Close</Secondary>
        </SecondaryWrapper>

        <TargetWrapper>
          <Animation height={animationHeight} trigger={btn1Trigger} duration={0.3}>
            <Primary onClick={() => buttonClick("https://www.target.com/gift-registry/gift-giver?registryId=92b30ba0-8888-11ec-8308-8da450f277d4&type=WEDDING")}>Target</Primary>
          </Animation>
        </TargetWrapper>

        <CrateWrapper>
          <Animation height={animationHeight} trigger={btn2Trigger} duration={0.3}>
            <Primary onClick={() => buttonClick("https://www.crateandbarrel.com/gift-registry/morgan-vanderveen-and-brandon-zacharias/r6458225")}>Crate & Barrell</Primary>
          </Animation>
        </CrateWrapper>
      </Wrapper>
    </>
  )
}

export default Registry

const BG = styled.div`
  display: none;
  background-color: ${colors.mauve800};
  opacity: 0;
  position: absolute;
  z-index: 6;
  bottom: 0;
  left: 0;
  will-change: transform;

  height: 100vh;
  width: 100vw;
`

const Wrapper = styled.div`
  display: none;
  opacity: 0;
  position: absolute;
  z-index: 7;
  bottom: 0;
  left: 0;
  will-change: transform;

  height: 100vh;
  width: 100vw;
`

const SecondaryWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -200%);

  top: 1.736vw;

  ${media.mobile} {
    transform: translate(-50%, 200%);
    top: unset;
    bottom: 13.333vw;
  }
`

const TargetWrapper = styled.div`
  position: absolute;
  width: 100%;

  top: 20.833vw;

  ${media.mobile} {
    top: 80vw;
  }
`

const CrateWrapper = styled.div`
  position: absolute;
  width: 100%;

  top: 27.5vw;

  ${media.mobile} {
    top: 105.6vw;
  }
`
