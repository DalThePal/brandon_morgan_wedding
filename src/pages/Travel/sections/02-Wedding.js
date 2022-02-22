import React, { useContext } from 'react'
import styled from 'styled-components'
import { ScreenContext } from 'components/Providers'

import colors from 'styles/colors'
import text   from 'styles/text'
import media  from 'styles/media'

import WeddingPNG           from 'images/wedding.png'
import WeddingMobilePNG     from 'images/wedding_mobile.png'

const Wedding = () => {

  const { mobile } = useContext(ScreenContext)

  return (
    <Wrapper data-scroll-section>
      <Img src={mobile ? WeddingMobilePNG : WeddingPNG} alt="venue"/>
      <H6>The wedding ceremony & reception will be held at The Castle at Wadley Farms in Lindon, Utah.</H6>
      <H6Clipped>The wedding ceremony & reception will be held at The Castle at Wadley Farms in Lindon, Utah.</H6Clipped>
    </Wrapper>
  )
}

export default Wedding

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.background};

  height: 41.25vw;
  padding-left: 7.222vw;
  padding-right: 7.222vw;

  ${media.mobile} {
    justify-content: flex-start;
    height: 265.6vw;
    padding-top: 53.333vw;
    padding-left: 5.333vw;
    padding-right: 5.333vw;
  }
`

const Img = styled.img`
  height: 100%;
  mix-blend-mode: screen;

  width: 40.417vw;

  ${media.mobile} {
    height: 133.333vw;
    width: 89.333vw;
  }
`

const H6 = styled.h6`
  ${text.desktop.h6}
  color: ${colors.roseIvory};
  text-align: center;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  padding: 7.57vw 8.333vw;

  ${media.mobile} {
    ${text.mobile.h2}
    height: 212.267vw;
    line-height: 95%;
    top: 53.333vw;
    left: 50%;
    transform: translateX(-50%);

    padding-top: 18.4vw;
    padding-left: 8.333vw;
    padding-right: 8.333vw;
    padding-bottom: 21.6vw;
  }
`

const H6Clipped = styled(H6)`
  color: transparent;
  z-index: 3;

  background: url(${WeddingPNG});
  background-repeat: no-repeat;
  background-size: 40.417vw 41.25vw;
  background-position: 50%;
  -webkit-background-clip: text;
  filter: brightness(0) invert(0);

  ${media.mobile} {
    background: url(${WeddingMobilePNG});
    background-repeat: no-repeat;
    background-size: 89.333vw 133.333vw;
    background-position: top center;
    -webkit-background-clip: text;
    filter: brightness(0) invert(0);
  }
`
