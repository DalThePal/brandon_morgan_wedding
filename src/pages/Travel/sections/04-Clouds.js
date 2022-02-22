import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import { useCloudMovement, useMedia } from 'utils/hooks'

import { VR } from 'components/Styled'

import media from 'styles/media'

import CloudPNG from 'images/cloud.png'
import PlanePNG from 'images/plane2.png'

const Clouds = () => {

  const wrapperRef  = useRef(null)
  const planeRef    = useRef(null)
  const vr1Ref      = useRef(null)
  const vr2Ref      = useRef(null)
  const vr3Ref      = useRef(null)
  const vr4Ref      = useRef(null)
  const vr5Ref      = useRef(null)

  const [cloud1Ref, setCloud1Ref] = useState(null) 
  const [cloud2Ref, setCloud2Ref] = useState(null) 
  const [cloud3Ref, setCloud3Ref] = useState(null) 

  const planeStart = useMedia(
    `top top+=${(window.innerWidth / 100) * 7}`,
    `top top+=${(window.innerWidth / 100) * 7}`,
    `top top+=${(window.innerWidth / 100) * 7}`,
    `top top+=${(window.innerWidth / 100) * 40}`
  )

  const planeEnd = useMedia(
    `bottom bottom-=${(window.innerWidth / 100) * 36}`,
    `bottom bottom-=${(window.innerWidth / 100) * 36}`,
    `bottom bottom-=${(window.innerWidth / 100) * 36}`,
    `bottom+=${(window.innerWidth / 100) * 150} bottom`
  )

  const planeBottom = useMedia('-13.889vw', '-13.889vw', '-13.889vw', '-77.867vw')

  const vrStart = useMedia(
    `top top+=${(window.innerWidth / 100) * 7}`,
    `top top+=${(window.innerWidth / 100) * 7}`,
    `top top+=${(window.innerWidth / 100) * 7}`,
    `top top+=${(window.innerWidth / 100) * 40}`
  )

  const vrEnd = useMedia(
    `bottom bottom-=${(window.innerWidth / 100) * 32.5}`,
    `bottom bottom-=${(window.innerWidth / 100) * 32.5}`,
    `bottom bottom-=${(window.innerWidth / 100) * 32.5}`,
    `bottom+=${(window.innerWidth / 100) * 130} bottom`
  )
 
  useCloudMovement([
    cloud1Ref,
    cloud2Ref,
    cloud3Ref
  ])

  useEffect(() => {
    const planeTl = gsap.timeline({
      scrollTrigger: {
        scroller: '.smooth-scroll',
        trigger: wrapperRef.current,
        scrub: true,
        start: planeStart,
        end: planeEnd,
      }
    })

    planeTl.to(planeRef.current, {
      bottom: planeBottom,
      ease: "none"
    }, 0)

    const vrTl = gsap.timeline({
      scrollTrigger: {
        scroller: '.smooth-scroll',
        trigger: wrapperRef.current,
        scrub: true,
        start: vrStart,
        end: vrEnd,
      }
    })

    vrTl.to([vr1Ref.current, vr2Ref.current, vr3Ref.current, vr4Ref.current, vr5Ref.current], {
      height: '0vw',
      ease: "none"
    }, 0)

    return () => {
      planeTl.kill()
      vrTl.kill()
    }
  }, [planeBottom, planeEnd, planeStart, vrStart, vrEnd])

  return (
    <Wrapper ref={wrapperRef} data-scroll-section>
      <Cloud1 ref={ref => setCloud1Ref(ref)} src={CloudPNG} alt="cloud"/>
      <Cloud2 ref={ref => setCloud2Ref(ref)} src={CloudPNG} alt="cloud"/>
      <Cloud3 ref={ref => setCloud3Ref(ref)} src={CloudPNG} alt="cloud"/>

      <Plane src={PlanePNG} ref={planeRef} alt="plane"/>
      <VR1 ref={vr1Ref}/>
      <VR2 ref={vr2Ref}/>
      <VR3 ref={vr3Ref}/>
      <VR4 ref={vr4Ref}/>
      <VR5 ref={vr5Ref}/>
    </Wrapper>
  )
}

export default Clouds

const Wrapper = styled.section`
  width: 100%;
  position: relative;

  height: 50.764vw;

  ${media.mobile} {
    height: 138.933vw;
  }
`

const Cloud1 = styled.img`
  position: absolute;
  z-index: 1;
  transform: scaleY(-1);

  width: 37.292vw;
  height: 21.319vw;
  top: 7.778vw;
  left: -7.361vw;

  ${media.mobile} {
    width: 72vw;
    height: 41.067vw;
    top: 57.6vw;
    left: -19.733vw;
  }
`

const Cloud2 = styled.img`
  position: absolute;
  z-index: 2;
  transform: scaleX(-1);

  width: 58.264vw;
  height: 33.264vw;
  top: 16.667vw;
  left: -2.083vw;

  ${media.mobile} {
    width: 112.267vw;
    height: 64vw;
    top: 74.933vw;
    left: -9.6vw;
  }
`

const Cloud3 = styled.img`
  position: absolute;
  z-index: 3;
  transform: rotate(180deg);

  width: 88.75vw;
  height: 50.764vw;
  top: 0vw;
  left: 28.889vw;

  ${media.mobile} {
    width: 171.2vw;
    height: 97.867vw;
    top: 26.667vw;
    left: 1.867vw;
  }
`

const Plane = styled.img`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);

  width: 10.417vw;
  height: 10.417vw;
  bottom: 10.417vw;

  ${media.mobile} {
    width: 51.2vw;
    height: 51.2vw;
    bottom: 31.467vw;
  }
`

const VR1 = styled(VR)`
  z-index: 2;

  height: 20.833vw;
  left: 46.597vw;
  bottom: -6.25vw;

  ${media.mobile} {
    height: 80vw;
    left: 36.533vw;
    bottom: -37.333vw;
  }
`

const VR2 = styled(VR)`
  z-index: 2;

  height: 20.833vw;
  left: 48.264vw;
  bottom: -8.333vw;

  ${media.mobile} {
    height: 80vw;
    left: 42.933vw;
    bottom: -45.333vw;
  }
`

const VR3 = styled(VR)`
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  height: 20.833vw;
  bottom: -10.417vw;

  ${media.mobile} {
    height: 80vw;
    bottom: -53.333vw;
  }
`

const VR4 = styled(VR)`
  z-index: 2;

  height: 20.833vw;
  right: 48.264vw;
  bottom: -8.333vw;

  ${media.mobile} {
    height: 80vw;
    right: 42.933vw;
    bottom: -45.333vw;
  }
`

const VR5 = styled(VR)`
  z-index: 2;

  height: 20.833vw;
  right: 46.597vw;
  bottom: -6.25vw;

  ${media.mobile} {
    height: 80vw;
    right: 36.533vw;
    bottom: -37.333vw;
  }
`
