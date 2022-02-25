import React, { useEffect, useRef, useState, useContext } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'
import { RouteContext } from 'components/Providers'

import { useMedia } from 'utils/hooks'

import colors from 'styles/colors'
import text   from 'styles/text'
import media  from 'styles/media'

import LinkWrapper from './Link'
import PrimaryButton from 'components/buttons/Primary'
import Animation from 'components/AppearAnimation'

const Header = () => {
  const { pathname } = useLocation()

  const route = useContext(RouteContext)

  const wrapperRef    = useRef(null)
  const line1Ref      = useRef(null)
  const line2Ref      = useRef(null)
  const circleRef     = useRef(null)
  const pathRef       = useRef(null)
  const textRef       = useRef(null)
  const closeTextRef  = useRef(null)
  const contentRef    = useRef(null)
  const initDone      = useRef(false)

  const [open, setOpen] = useState(false)

  const [btn1Trigger, setBtn1Trigger]     = useState(false)
  const [btn2Trigger, setBtn2Trigger]     = useState(false)
  const [logoTrigger, setLogoTrigger]     = useState(false)
  const [toggleTrigger, setToggleTrigger] = useState(false)

  const [tl, setTl] = useState(gsap.timeline())
  
  const duration = 0.5

  const animationHeight = useMedia("4.931vw", "4.931vw", "4.931vw", "18.933vw")
  const logoAnimHeight  = useMedia("4.167vw", "4.167vw", "4.167vw", "16vw")
  const toggleHeight    = useMedia('1.042vw', '1.042vw', '1.042vw', '1.042vw')

  useEffect(() => {
    const initTl = gsap.timeline({
      delay: 1.2,
      onComplete: () => {
        initDone.current = true
      }
    })
    initTl.call(setLogoTrigger, [true], 0)
    initTl.call(setToggleTrigger, [true], 0)
    initTl.to(line1Ref.current, {
      duration: 0.5,
      attr: {
        x2: '100%'
      }
    }, 0)
    initTl.to(line2Ref.current, {
      duration: 0.3,
      attr: {
        x2: '100%'
      }
    }, 0.2)

    const tl = gsap.timeline({
      paused: true
    })
    tl.call(setBtn1Trigger, [true], 0)
    tl.call(setBtn2Trigger, [true], 0.1)

    setTl(tl)

    return () => {
      tl.kill()
      initTl.kill()
    }

  }, [])

  useEffect(() => {
    if (open) {
      window.locomotiveScroll.stop()

      gsap.fromTo(contentRef.current, {
        display: 'flex'
      }, {
        duration,
        opacity: 1
      })

      gsap.to(line1Ref.current, {
        duration,
        attr: {
          x1: '10%',
          x2: '90%',
          y1: "10%",
          y2: "90%"
        },
        stroke: colors.mauve800
      })

      gsap.to(line2Ref.current, {
        duration,
        attr: {
          x1: '10%',
          x2: '90%',
          y1: "90%",
          y2: "10%"
        },
        stroke: colors.mauve800
      })

      gsap.to(circleRef.current, {
        duration,
        stroke: colors.mauve800
      })

      gsap.to(pathRef.current, {
        duration,
        fill: colors.mauve800,
        stroke: colors.mauve800
      })

      gsap.to(textRef.current, {
        duration,
        opacity: 0
      })

      gsap.to(closeTextRef.current, {
        duration,
        opacity: 1
      })

    } else {
      if (initDone.current) {
        window.locomotiveScroll.start()
  
        gsap.to(contentRef.current, {
          duration,
          opacity: 0,
          onComplete: () => {
            gsap.set(contentRef.current, {
              display: 'none'
            })
          }
        })
  
        gsap.to(line1Ref.current, {
          duration,
          attr: {
            x1: '0%',
            x2: '100%',
            y1: "40%",
            y2: "40%"
          },
          stroke: colors.roseIvory
        })
  
        gsap.to(line2Ref.current, {
          duration,
          attr: {
            x1: '0%',
            x2: '100%',
            y1: "55%",
            y2: "55%"
          },
          stroke: colors.roseIvory
        })
  
        gsap.to(circleRef.current, {
          duration,
          stroke: colors.roseIvory
        })
  
        gsap.to(pathRef.current, {
          duration,
          fill: colors.roseIvory,
          stroke: colors.roseIvory
        })
  
        gsap.to(textRef.current, {
          duration,
          opacity: 1
        })
  
        gsap.to(closeTextRef.current, {
          duration,
          opacity: 0
        })
      }
    }
  }, [open])

  const registryMouseLeave = () => {
    setBtn1Trigger(false)
    setBtn2Trigger(false)
  }

  const buttonClick = (href) => {
    registryMouseLeave()
    window.open(href, '__blank')
  }

  const linkClick = (path) => {
    route.setState(path)
    setOpen(false)
  }

  return (
    <Wrapper ref={wrapperRef} >
      <Top>
        <LogoWrapper onClick={() => linkClick('/')}>
          <Animation height={logoAnimHeight} duration={0.3} trigger={logoTrigger}>
            <Logo viewBox="0 0 60 60" fill="none">
              <circle ref={circleRef} cx="30" cy="30" r="29.5" stroke="#F9F2F7"/>
              <path 
                ref={pathRef} 
                fillRule="evenodd" 
                clipRule="evenodd" 
                fill={colors.roseIvory}
                d={`M31.3787 16.1943C31.0166 15.3309 31.8796 
                    15.1637 32.3343 15.1637V15H28.6784V15.1649C29.2627 
                    15.1649 29.6711 15.4134 30.0887 16.3099L23.8414 
                    32.6015L16.9415 16.1943C16.5794 15.3309 17.4425 
                    15.1637 17.8971 15.1637V15H14.2401V15.1649C14.8255 
                    15.1649 15.2339 15.4134 15.6504 16.3099L11.0667 
                    28.2515C10.1481 30.6309 10 32.2008 10 33.1008C10 
                    37.4267 13.7854 40.7141 18.5184 40.7141H20.3833L21.2927 
                    38.7023H21.1249C20.1508 40.5137 18.5681 40.5114 18.0799 
                    40.5114H18.0545C14.5745 40.5114 10.1666 37.7931 10.1666 
                    33.063C10.1666 32.1996 10.3158 30.6756 11.2344 
                    28.2882L15.7348 16.5607L25.4587 39.6492C25.8208 40.5126 
                    24.8004 40.5492 24.6697 
                    40.5492V40.7141H28.0849V40.5492H28.0479C27.8478 
                    40.5607 27.1929 40.5973 26.7984 39.6481L23.9409 
                    32.8248L30.1755 16.5653L35.9959 30.3893V43.8057C35.9959 
                    44.8363 35.0403 44.8363 34.8737 44.8363V45H43.2336C47.5142 
                    45 51 41.6302 51 37.4691C51 33.2725 47.5119 29.9382 43.2336 
                    29.9382H42.9374C44.1418 29.6661 45.2171 28.9974 45.9874 
                    28.0416C46.7577 27.0857 47.1773 25.8994 47.1775 
                    24.6767C47.1775 21.7099 44.6913 19.2859 41.6105 
                    19.2859H34.8737V19.4508C35.0403 19.4508 35.9959 19.4874 
                    35.9959 20.5168V27.1855L31.3787 16.1943ZM41.6105 
                    29.9347C44.1429 29.9347 46.1386 27.5473 46.1386 
                    24.6733C46.1386 21.7992 44.1059 19.4508 41.5734 
                    19.4508H38.326C38.0379 19.4508 37.2489 19.5653 37.2489 
                    20.5168V29.9382L41.6105 29.9347ZM37.2489 43.8023C37.2489 
                    44.7481 38.1212 44.8328 38.3722 44.8328H43.1503C46.6859 
                    44.8328 49.5527 41.4985 49.5527 37.4668C49.5527 33.3985 
                    46.6859 30.1019 43.1503 30.1019H37.25L37.2489 43.8023Z
                  `} 
              />
            </Logo>
          </Animation>
        </LogoWrapper>
        <Toggle onClick={() => setOpen(!open)}>
          <ToggleText ref={textRef}>
            <Animation trigger={toggleTrigger} height={toggleHeight} duration={0.5}>
              Menu
            </Animation>
          </ToggleText>
          <CloseText ref={closeTextRef}>Close</CloseText>
          <ToggleSvg>
            <Line ref={line1Ref} x1={"0%"} x2={'0%'} y1={'40%'} y2={'40%'}/>
            <Line ref={line2Ref} x1={"0%"} x2={'0%'} y1={'55%'} y2={'55%'}/>
          </ToggleSvg>
        </Toggle>
      </Top>
      <Content ref={contentRef}>
        <LinkWrapper disabled={pathname === "/travel"} width={"40.833vw"}>
          <StyledLink onClick={() => linkClick("/travel")} >Travel</StyledLink>
        </LinkWrapper>
        <LinkWrapper width={"52.569vw"}>
          <Registry onMouseLeave={registryMouseLeave} onClick={() => tl.play(0)}>
            Registry
            <ButtonRow >
              <Animation height={animationHeight} trigger={btn1Trigger} duration={0.3}>
                <PrimaryButton onClick={() => buttonClick("https://www.target.com/gift-registry/gift-giver")}>Target</PrimaryButton>
              </Animation>
              <Animation height={animationHeight} trigger={btn2Trigger} duration={0.3}>
                <PrimaryButton onClick={() => buttonClick("https://www.crateandbarrel.com/gift-registry/morgan-vanderveen-and-brandon-zacharias/r6458225")}>Crate & Barrell</PrimaryButton>
              </Animation>
            </ButtonRow>
          </Registry>
        </LinkWrapper>
        <LinkWrapper width={"41.667vw"} disabled><p>Details</p><Soon>Coming Soon...</Soon></LinkWrapper>
      </Content>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  transform:translate3d(0,0,0);
  z-index: 5;
  top: 0;
  left: 0;
`

const Top = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6.944vw;
  padding-top: 1.458vw;
  padding-left: 8.333vw;
  padding-right: 8.333vw;

  ${media.mobile} {
    height: 26.667vw;
  }
`

const LogoWrapper = styled.div`
  height: 4.167vw;
  width: 4.167vw;

  ${media.mobile} {
    height: 16vw;
    width: 16vw;
  }
`

const Logo = styled.svg`
  cursor: pointer;

  height: 100%;
  width: 100%;
`

const Toggle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  height: 2.847vw;
  width: 7.083vw;

  ${media.mobile} {
    width: 13.333vw;
    height: 13.333vw;
  }
`

const ToggleText = styled.span`
  ${text.desktop.nav}
  color: ${colors.roseIvory};

  margin-right: 0.694vw;
  width: 2.917vw;

  ${media.mobile} {
    display: none;
  }
`

const CloseText = styled(ToggleText)`
  position: absolute;
  opacity: 0;
  color: ${colors.mauve800};

  left: 0;
  top: 35%;

  ${media.mobile} {
    display: none;
  }
`

const ToggleSvg = styled.svg`
  width: 3.472vw;
  height: 3.472vw;

  ${media.mobile} {
    width: 13.333vw;
    height: 13.333vw;
  }
`

const Line = styled.line`
  stroke: ${colors.roseIvory};
  stroke-width: 0.139vw;

  ${media.mobile} {
    stroke-width: 0.267vw;
  }
`

const Content = styled.div`
  background-color: ${colors.roseIvory};
  position: absolute;
  display: none;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  padding-top: 6.944vw;

  ${media.mobile} {
    padding-top: 40.333vw;
  }
`

const Soon = styled.p`
  ${text.desktop.nav}
  text-align: center;
  color: ${colors.mauve50};
  width: 100%;
  letter-spacing: 0;

  ${media.mobile} {
    ${text.mobile.nav}
  }
`

const Registry = styled.div`
  position: relative;
`

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 0;

  width: 40.778vw;

  ${media.mobile} {
    flex-direction: column;
    width: 100%;
    height: 41.867vw;
  }
`

const StyledLink = styled.p`
  color: inherit;
  text-decoration: none;
`
