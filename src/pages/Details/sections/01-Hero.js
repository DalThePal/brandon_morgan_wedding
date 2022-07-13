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
        <ScheduleWrapper>
          <LargeTwo>Schedule</LargeTwo>
          <Item>
            <p>4:30 PM</p>
            <p>Ceremony begins.</p>
          </Item>
          <Item>
            <p>5:00 - 6:00 PM</p>
            <p>Cocktail hour.</p>
          </Item>
          <Item>
            <p>5:00 - 6:00 PM</p>
            <p>Reception begins.</p>
          </Item>
          <SmallTwo>Dinner will be served and accompanied by an open bar. Dancing will follow.</SmallTwo>
        </ScheduleWrapper>
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
  position: relative;
  z-index: 1;
  color: ${colors.mauve600};
  ${text.desktop.h3}
  opacity: 0.2;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  color: ${colors.roseIvory};

  top: 12.5vw;
  width: 40.28vw;
  gap: 2.08vw;
`

const Large = styled.p`
  ${text.desktop.h7}
`

const Medium = styled.p`
  ${text.desktop.body}
  width: 61.94vw;
`

const Small = styled.p` 
  ${text.desktop.body}
  font-size: 1.04vw;
  width: 51.94vw;
`

const Arrow = styled.img`
  width: 1.88vw;
  height: 3.47vw;
`

const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 18.4vw;
  width: 45.83vw;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  ${text.desktop.body}
  color: ${colors.roseIvory};
  border-bottom: 1px solid rgba(249, 242, 247, 0.5);

  height: 3.47vw;
  gap: 5.21vw;

  p {
    text-align: left;
    :nth-child(1) {
      width: 10.56vw;
    }

    :nth-child(2) {
      width: fit-content;
    }
  }
`

const LargeTwo = styled(Large)`
  border-bottom: 1px solid ${colors.roseIvory};
  width: 100%;
`

const SmallTwo = styled(Small)`
  margin-top: 0.69vw;
  width: 100%;
  text-align: left;
`
