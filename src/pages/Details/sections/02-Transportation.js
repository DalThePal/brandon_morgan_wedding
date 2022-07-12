import React from 'react'
import styled from 'styled-components'

import text   from 'styles/text'
import colors from 'styles/colors'

import TransportJPG from 'images/details/transportation.jpg'

const Transportation = () => {
  return (
    <Wrapper data-scroll-section>
      <Image src={TransportJPG} alt="venue"/>
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
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 53.19vw;
`

const Image = styled.img`
  width: 40.42vw;
  height: 41.25vw;
  border-radius: 27.78vw 27.78vw 0vw 0vw;
  margin-bottom: 2.92vw;
`

const Title = styled.h2`
  position: absolute;
  z-index: 2;
  ${text.desktop.h4}
  color: ${colors.roseIvory};

  top: 16.18vw;
`

const TitleClipped = styled(Title)`
  color: transparent;
  background: url(${TransportJPG});
  background-repeat: no-repeat;
  background-size: 40.42vw 41.25vw;
  background-position: 50%;
  -webkit-background-clip: text;
  filter: brightness(0) invert(0.3);
`

const Text = styled.p`
  color: ${colors.roseIvory};
  ${text.desktop.body}
  text-align: center;

  width: 42.01vw;
`
