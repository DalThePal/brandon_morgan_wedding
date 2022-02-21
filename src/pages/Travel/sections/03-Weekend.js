import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import text from 'styles/text'

import WeekendPNG from 'images/weekend.png'

const Weekend = () => {
  return (
    <Wrapper data-scroll-section>
      <Content>
        <H2>The wedding weekend</H2>
        <P>
          Most of the wedding weekend will take place in downtown 
          Salt Lake City, Utah. On Saturday, we will be offering 
          transportation services from SLC to the 
          ceremony/reception venue in Lindon, UT (about 30 minutes 
          from Salt Lake City). Check back in a few months for 
          more information on transportation!
        </P>
      </Content>
      <Img src={WeekendPNG} alt='Salt Lake City is for lovers'/>
    </Wrapper>
  )
}

export default Weekend

const Wrapper = styled.section`
  background: ${colors.background};
  width: 100%;
  position: relative;

  height: 76.389vw;
`

const Content = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  top: 31.042vw;
  left: 8.264vw;
`

const H2 = styled.h2`
  ${text.desktop.h5}
  color: ${colors.roseIvory};

  margin-bottom: 1.944vw;
  width: 61.806vw;
`

const P = styled.p`
  ${text.desktop.body}
  color: ${colors.roseIvory};

  width: 40.278vw;
`

const Img = styled.img`
  position: absolute;
  mix-blend-mode: screen;
  z-index: 1;
  right: 0vw;
  
  top: 20.833vw;
  height: 55.556vw;
  width: 50vw;
`
