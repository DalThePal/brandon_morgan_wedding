import React, { useEffect, useRef, useContext } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom' 
import { RouteContext } from './Providers'

import colors from 'styles/colors'

import CloudPNG from 'images/cloud.png'

const Transition = () => {

  const route = useContext(RouteContext)
  const navigate = useNavigate()
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (route.state) {
      const tl = gsap.timeline({
        onComplete: () => {
          navigate(route.state)
        }
      })

      tl.set(wrapperRef.current, {
        display: 'flex'
      }, 0)
  
      tl.to(wrapperRef.current, {
        duration: 0.5,
        opacity: 1
      }, 0)
  
      tl.fromTo(".cloud", {
        y: '100%'
      }, {
        duration: 0.5,
        opacity: 1,
        y: '0%',
        ease: "circ.out"
      }, 0)
  
      const tl2 = gsap.timeline({
        delay: 0.75,
        onComplete: () => {
          route.setState(null)
        }
      })

      tl2.to(".cloud", {
        duration: 0.5,
        opacity: 0,
        y: '100%',
        ease: "circ.in"
      }, 0)

      tl2.to(wrapperRef.current, {
        duration: 0.5,
        opacity: 0
      }, 0)

      tl2.set(wrapperRef.current, {
        display: 'none'
      }, 0.5)

      return () => {
        tl.kill()
        tl2.kill()
      }
    }
  }, [route])

  return (
    <Wrapper ref={wrapperRef}>
      <Cloud1 src={CloudPNG} alt="cloud" className="cloud"/>
      <Cloud3 src={CloudPNG} alt="cloud" className="cloud"/>
      <Cloud2 src={CloudPNG} alt="cloud" className="cloud"/>
      <Cloud4 src={CloudPNG} alt="cloud" className="cloud"/>
      <Cloud5 src={CloudPNG} alt="cloud" className="cloud"/>
      <Cloud6 src={CloudPNG} alt="cloud" className="cloud"/>
      <Cloud9 src={CloudPNG} alt="cloud" className="cloud"/>
      <Cloud10 src={CloudPNG} alt="cloud" className="cloud"/>
      <Cloud11 src={CloudPNG} alt="cloud" className="cloud"/>
      <Cloud12 src={CloudPNG} alt="cloud" className="cloud"/>
      <Cloud13 src={CloudPNG} alt="cloud" className="cloud"/>
      <Cloud14 src={CloudPNG} alt="cloud" className="cloud"/>
      <Cloud15 src={CloudPNG} alt="cloud" className="cloud"/>
    </Wrapper>
  )
}

export default Transition

const Wrapper = styled.div`
  position: fixed;
  display: none;
  z-index: 10;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.pink400};
`

const Cloud = `
  position: absolute;
  opacity: 0;
`

const Cloud1 = styled.img`
  ${Cloud}
  transform: scaleX(-1);

  width: 37.292vw;
  height: 21.32vw;
  top: 40.556vw;
  left: 67.639vw
`

const Cloud2 = styled.img`
  ${Cloud}

  width: 88.75vw;
  height: 50.764vw;
  top: 19.028vw;
  left: -18.472vw;
`

const Cloud3 = styled.img`
  ${Cloud}
  transform: scaleY(-1);

  width: 58.264vw;
  height: 33.264vw;
  top: 11.111vw;
  left: -8.264vw;
`

const Cloud4 = styled.img`
  ${Cloud}
  transform: scale(-1);

  width: 88.75vw;
  height: 50.764vw;
  top: 11.111vw;
  left: 29.028vw;
`

const Cloud5 = styled.img`
  ${Cloud}

  width: 37.292vw;
  height: 21.319vw;
  top: -13.611vw;
  left: 67.639vw;
`

const Cloud6 = styled.img`
  ${Cloud}

  width: 88.75vw;
  height: 50.764vw;
  left: -18.472vw;
  top: -35.139vw;
`

const Cloud9 = styled.img`
  ${Cloud}
  transform: scaleY(-1);

  width: 37.292vw;
  height: 21.319vw;
  top: -7.361vw;
  left: -5.764vw;
`

const Cloud10 = styled.img`
  ${Cloud}
  transform: scale(-1);

  width: 88.75vw;
  height: 50.764vw;
  top: -15.278vw;
  left: 28.889vw;
`

const Cloud11 = styled.img`
  ${Cloud}
  transform: scaleX(-1);

  width: 58.264vw;
  height: 33.264vw;
  top: 10.139vw;
  left: 49.167vw;
`

const Cloud12 = styled.img`
  ${Cloud}
  
  width: 88.75vw;
  height: 50.764vw;
  top: -7.361vw;
  left: -18.472vw;
`

const Cloud13 = styled.img`
  ${Cloud}

  width: 58.264vw;
  height: 33.264vw;
  top: 40.139vw;
  left: 30.167vw;
`

const Cloud14 = styled.img`
  ${Cloud}
  transform: scale(-1);
  
  width: 88.75vw;
  height: 50.764vw;
  top: 44.361vw;
  left: -18.472vw;
`

const Cloud15 = styled.img`
  ${Cloud}

  width: 88.75vw;
  height: 50.764vw;
  left: 50.472vw;
  top: 45.139vw;
`
