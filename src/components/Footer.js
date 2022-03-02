import React, { useRef, useContext } from 'react'
import styled from 'styled-components'

import { RegistryContext, RouteContext } from './Providers'

import { useMedia } from 'utils/hooks'

import colors from 'styles/colors'
import text   from 'styles/text'
import media  from 'styles/media'

import { ReactComponent as ArcSVG } from 'images/arc.svg'
import DiamondGIF from 'images/diamond.gif'

const Footer = ({ diamond, leftText }) => {
  const registry  = useContext(RegistryContext)
  const route     = useContext(RouteContext)

  const diamondRef = useRef(null)

  const x1 = useMedia("57%", "57%", "57%", "65%")
  const x2 = useMedia("43%", "43%", "43%", "35%")

  const linkClick = (path) => {
    route.setState(path)
  }

  return (
    <Wrapper data-scroll-section>
      {diamond && <Diamond ref={diamondRef} src={DiamondGIF}/>}
      <Arc/>
      <SVG>
        <Line x1={"0%"}   x2={"0%"}   y1={"0%"}   y2={'100%'}/>
        <Line x1={"100%"} x2={"100%"} y1={"0%"}   y2={'100%'}/>
        <Line x1={"0%"}   x2={"100%"} y1={"100%"} y2={"100%"}/>
        <Line x1={"0%"}   x2={x2}     y1={"0%"}   y2={"0%"}/>
        <Line x1={x1}     x2={"100%"} y1={"0%"}   y2={"0%"}/>
      </SVG> 
      <Left>{leftText}</Left>
      <Right>
        <Text>Please come back after March 15th for a completed "Details" page and more information about the wedding weekend agenda.</Text>
        <Links>
          <P onClick={() => registry.setState(true)}>Registry</P>
          <P onClick={() => linkClick('/travel')} >Travel</P>
        </Links>
      </Right>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  position: relative;
  z-index: 3;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  height: 27.431vw;
  padding-top: 6.944vw;
  padding-left: 8.333vw;
  padding-right: 8.333vw;

  .vsc-controller {
    display: none;
  }

  ${media.mobile} {
    flex-direction: column;
    justify-content: flex-start;

    height: 163.733vw;
    padding-top: 48.533vw;
    padding-left: 11.733vw;
    padding-right: 11.733vw;
  }
`

const Left = styled.p`
  position: relative;
  z-index: 2;
  ${text.desktop.h7}
  color: ${colors.roseIvory};

  width: 35.069vw;

  ${media.mobile} {
    ${text.mobile.body}
    width: 76.533vw;
    padding-bottom: 6.667vw;
    margin-bottom: 8.533vw;
    border-bottom: 0.267vw solid ${colors.roseIvory};
  }
`

const Right = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 24.306vw;

  ${media.mobile} {
    width: 78.133vw;
  }
`

const Text = styled.p`
  ${text.desktop.body}
  color: ${colors.roseIvory};
  
  margin-bottom: 3.472vw;

  ${media.mobile} {
    ${text.mobile.body}
    margin-bottom: 13.333vw;
  }
`

const Links = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const P = styled.p`
  ${text.desktop.body}
  color: ${colors.roseIvory};
  text-decoration: none;
  cursor: pointer;
  opacity: ${props => props.disabled ? 0.5 : 1};

  margin-right: 5.208vw;

  ${media.mobile} {
    ${text.mobile.body}
    margin-right: 9.6vw;
  }
`

const SVG = styled.svg`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  
  top: 3.125vw;
  width: 91.319vw;
  height: 20.833vw;

  ${media.mobile} {
    top: unset;
    bottom: 5.73vw;
    height: 138.133vw;
    width: 88.8vw;
  }
`

const Line = styled.line`
  stroke: ${colors.roseIvory};
  stroke-width: 0.139vw;

  ${media.mobile} {
    stroke-width: 0.267vw;
  }
`

const Arc = styled(ArcSVG)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  top: 3.611vw;
  width: 5.556vw;
  height: 5.556vw;

  ${media.mobile} {
    width: 21.333vw;
    height: 21.333vw;
    bottom: 120.867vw;
    top: unset;
  }
`

const Diamond = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  
  top: 0.5vw;
  height: 5.25vw;

  ${media.mobile} {
    height: 27vw;
    top: -3.5vw;
  }
`
