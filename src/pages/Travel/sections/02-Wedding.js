import React from 'react'
import styled from 'styled-components'

import colors, { gradients } from 'styles/colors'
import text from 'styles/text'

import WeddingPNG from 'images/wedding.png'
import CroppedTextPNG from 'images/cropped_text.png'

const Wedding = () => {
  return (
    <Wrapper data-scroll-section>
      <Img src={WeddingPNG} alt="venue"/>
      <H6>
        The wedding ceremony & reception will be held at The Castle at Wadley Farms in Lindon, Utah.
      </H6>
      <CroppedText src={CroppedTextPNG} alt="ding cerem on will be astle at wa s in lindon"/>
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
  background: ${gradients.imageSequence};

  height: 41.25vw;
  padding-left: 7.222vw;
  padding-right: 7.222vw;
`

const Img = styled.img`
  height: 100%;
  mix-blend-mode: screen;

  width: 40.417vw;
`

const H6 = styled.h6`
  ${text.desktop.h6}
  color: ${colors.roseIvory};
  text-align: center;
  mix-blend-mode: screen;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 14.444vw);
`

const CroppedText = styled.img`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40.417vw;
  height: 33.681vw;
`
