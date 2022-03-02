import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import text   from 'styles/text'
import media  from 'styles/media'

import WeekendJPG from 'images/travel/weekend.jpg'

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
      <Img src={WeekendJPG} alt='Salt Lake City is for lovers'/>
    </Wrapper>
  )
}

export default Weekend

const Wrapper = styled.section`
  background: ${colors.background};
  width: 100%;
  position: relative;

  height: 76.389vw;

  ${media.mobile} {
    height: 272.8vw;
  }
`

const Content = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  top: 31.042vw;
  left: 8.264vw;

  ${media.mobile} {
    top: 125.333vw;
    left: 5.333vw;
  }
`

const H2 = styled.h2`
  ${text.desktop.h5}
  color: ${colors.roseIvory};

  margin-bottom: 1.944vw;
  width: 61.806vw;

  ${media.mobile} {
    ${text.mobile.h1}
    width: 92.8vw;
    margin-bottom: 6.667vw;
  }
`

const P = styled.p`
  ${text.desktop.body}
  color: ${colors.roseIvory};

  width: 40.278vw;

  ${media.mobile} {
    ${text.mobile.body}
    width: 89.067vw;
  }
`

const Img = styled.img`
  position: absolute;
  z-index: 1;
  right: 0vw;
  
  top: 20.833vw;
  height: 55.556vw;
  width: 50vw;

  ${media.mobile} {
    height: 111.2vw;
    width: 100%;
    top: 26.667vw;
  }
`
