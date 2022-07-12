import React from 'react'
import styled from 'styled-components'

import text   from 'styles/text'
import colors from 'styles/colors'

import ArrowSVG from 'images/largeArrow.svg'

const Hero = () => {
  return (
    <Wrapper data-scroll-section>
      <Title>ThE DEETS</Title>
      <Content>
        <Large>Wedding Location</Large>
        <Medium>
          The wedding celebration will be held at The 
          Castle at Wadley Farms in Lindon, Utah. The 
          Castle's address is 35 E 400 N St., Lindon, 
          UT 84042.
        </Medium>
        <Small>
          Please note that Wadley Farms is home to multiple 
          reception areas, but our guests should enter 
          through the main castle doors. Plenty of free 
          parking is available on the north end of the 
          venue. 
        </Small>
        <Arrow src={ArrowSVG} alt="scroll arrow"/>
      </Content>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 55.56vw;
  padding-top: 9.03vw;
`

const Title = styled.h1`
  color: ${colors.mauve800};
  ${text.desktop.h3}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  color: ${colors.roseIvory};

  top: -100px;
  width: 40.28vw;
  gap: 2.08vw;
`

const Large = styled.p`
  ${text.desktop.h7}
`

const Medium = styled.p`
  ${text.desktop.body}
`

const Small = styled.p` 
  ${text.desktop.body}
  font-size: 1.04vw;
`

const Arrow = styled.img`
  width: 1.88vw;
  height: 3.47vw;
`
