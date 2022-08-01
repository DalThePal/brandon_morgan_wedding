import React, { useContext } from 'react'
import styled from 'styled-components'

import text   from 'styles/text'
import colors from 'styles/colors'
import media from 'styles/media'

import { ScreenContext } from 'components/Providers'
import TransportJPG from 'images/details/transportation.jpg'
import TransportMobileJPG from 'images/details/transportationMobile.jpg'
import TransportMobileRotateJPG from 'images/details/transportMobileRotate.jpg'

const Transportation = () => {

  const { mobile } = useContext(ScreenContext)

  return (
    <Wrapper>
      <Image src={mobile ? TransportMobileJPG : TransportJPG} alt="venue"/>
      <Title>transportation</Title>
      <TitleClipped>transportation</TitleClipped>
      <Text>
        Transportation information will be sent out to guests 
        once we receive all RSVPs. Guests are welcome to drive 
        themselves to the venue - plenty of parking will be 
        available.
      </Text>
    </Wrapper>
  )
}

export default Transportation

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 53.19vw;

  ${media.mobile} {
    height: 255.47vw;
    padding-top: 26.67vw;
  }
`

const Image = styled.img`
  width: 40.42vw;
  height: 41.25vw;
  border-radius: 27.78vw 27.78vw 0vw 0vw;
  margin-bottom: 2.92vw;

  ${media.mobile} {
    width: 77.6vw;
    height: 133.33vw;
    border-radius: 53.33vw 53.33vw 0vw 0vw;
    margin-bottom: 31.2vw;
  }
`

const Title = styled.h2`
  position: absolute;
  z-index: 2;
  ${text.desktop.h4}
  color: ${colors.roseIvory};

  top: 16.18vw;

  ${media.mobile} {
    font-size: 26.67vw;
    transform: rotate(90deg);
    top: 85.07vw;
  }
`

const TitleClipped = styled(Title)`
  color: transparent;
  background-image: url(${TransportJPG});
  background-repeat: no-repeat;
  background-size: 40.42vw 41.25vw;
  background-position: 50%;
  -webkit-background-clip: text;
  filter: brightness(0) invert(0.3);

  ${media.mobile} {
    background-image: url(${TransportMobileRotateJPG});
    background-size: 133.33vw 77.6vw;
    background-position: 41.4% 50%;
  }
`

const Text = styled.p`
  color: ${colors.roseIvory};
  ${text.desktop.body}
  text-align: center;

  width: 42.01vw;

  ${media.mobile} {
    ${text.mobile.body}
    width: 88.8vw;
  }
`
