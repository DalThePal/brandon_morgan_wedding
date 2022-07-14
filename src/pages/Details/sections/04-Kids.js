import React from 'react'
import styled from 'styled-components'

import text   from 'styles/text'
import colors from 'styles/colors'
import media from 'styles/media'

const Kids = () => {
  return (
    <Wrapper data-scroll-section>
      <Title>ArE KIdS INvITEd?</Title>
      <Content>
        <Kicker>Of course!</Kicker>
        <Text>
          Your teens, tweens, toddlers, and babies alike 
          are warmly welcomed to share the day with us. 
          Please let us know if they'll be in attendance 
          so that we can be sure to save them a seat at 
          your table. 
        </Text>
      </Content>
    </Wrapper>  
  )
}

export default Kids

const Wrapper = styled.section`
  display: flex;
  align-items: flex-start;
  color: ${colors.roseIvory};

  height: 49.31vw;
  padding: 17.36vw 8.26vw 6.94vw;
  gap: 2.78vw;

  ${media.mobile} {
    flex-direction: column;
    align-items: center;
    height: 203.73vw;
    padding: 40vw 5.33vw 26.67vw;
    gap: 13.33vw;
  }
`

const Title = styled.h4`
  ${text.desktop.h4}

  width: 51.04vw;

  ${media.mobile} {
    text-align: center;
    ${text.mobile.h6}
    width: 100%;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1.39vw;
  width: 29.51vw;

  ${media.mobile} {
    align-items: center;
    width: 100%;
    gap: 5.33vw;
  }
`

const Kicker = styled.p`
  ${text.desktop.h7}

  ${media.mobile} {
    ${text.mobile.h7}
  }
`

const Text = styled.p`
  ${text.desktop.body}

  ${media.mobile} {
    text-align: center;
    ${text.mobile.body}
  }
`
