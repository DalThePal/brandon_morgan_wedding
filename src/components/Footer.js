import React, { useRef, useContext } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import { RouteContext, ScreenContext } from './Providers'

import { useMedia } from 'utils/hooks'
import { links } from 'utils/links'

import SmallButton from 'components/buttons/Small'

import colors from 'styles/colors'
import text   from 'styles/text'
import media  from 'styles/media'

import { ReactComponent as ArcSVG } from 'images/arc.svg'
import DiamondGIF from 'images/diamond.gif'

const Footer = ({ diamond }) => {
  const route = useContext(RouteContext)
  const { mobile } = useContext(ScreenContext)
  const { pathname } = useLocation()


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
      <Left>
        Get ready to party!
        {pathname !== '/rsvp' && <SmallButton 
          width={mobile ? '100%' : 'fit-content'}
          onClick={() => linkClick("/rsvp")}
          backgroundColor={colors.roseIvory}
          color={colors.mauve800}
        >RSVP</SmallButton>}
      </Left>
      <Right>
        <Text>Please submit your RSVP before August 13th to allow for accurate head count for food & dinner.</Text>
        <Links>
          <P onClick={() => linkClick('/')} >Home</P>
          <P onClick={() => linkClick('/travel')} >Travel</P>
          <P onClick={() => linkClick('/details')} >Details</P>
        </Links>
        <RegistryLinks>
          <Registry href={links.target} target="blank">Target Registry</Registry>
          <Registry href={links.crateAndBarrel} target="blank">Crate & Barrel Registry</Registry>
        </RegistryLinks>
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
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  ${text.desktop.h7}
  color: ${colors.roseIvory};

  width: 35.069vw;
  gap: 1.74vw;

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
    margin-bottom: 8vw;
  }
`

const Links = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 3.47vw;
  margin-bottom: 1.74vw;

  ${media.mobile} {
    gap: 13.33vw;
    margin-bottom: 6.67vw;
  }
`

const P = styled.p`
  ${text.desktop.body}
  color: ${colors.roseIvory};
  text-decoration: none;
  cursor: pointer;
  width: fit-content;
  opacity: ${props => props.disabled ? 0.5 : 1};

  ${media.mobile} {
    ${text.mobile.body}
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
    top: 6vw;
  }
`

const RegistryLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  gap: 3.47vw;

  ${media.mobile} {
    gap: 13.33vw;
  }
`

const Registry = styled.a`
  cursor: pointer;
  ${text.desktop.navSmall}
  color: ${colors.roseIvory};
  text-decoration: none;

  ${media.mobile} {
    ${text.mobile.navSmall}
  }
`
