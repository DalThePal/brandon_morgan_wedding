import React from 'react'
import styled from 'styled-components'

import text   from 'styles/text'
import colors from 'styles/colors'
import media from 'styles/media'

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

  ${media.mobile} {
    height: 249.33vw;
    padding-top: 33.33vw;
  }
`

const Title = styled.h1`
  position: relative;
  z-index: 1;
  color: ${colors.mauve600};

  ${text.desktop.h3}
  opacity: 0.2;

  ${media.mobile} {
    ${text.mobile.h5}
    font-size: 29vw;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  z-index: 2;
  color: ${colors.roseIvory};

  top: 12.5vw;
  width: 40.28vw;
  gap: 2.08vw;

  ${media.mobile} {
    width: 89.07vw;
    top: 46.67vw;
    gap: 4vw;
  }
`

const Large = styled.p`
  ${text.desktop.h7}

  ${media.mobile} {
    ${text.mobile.h7}
  }
`

const Medium = styled.p`
  ${text.desktop.body}
  width: 61.94vw;

  ${media.mobile} {
    ${text.mobile.body}
    width: 100%;
  }
`

const Small = styled.p` 
  ${text.desktop.body}
  font-size: 1.04vw;
  width: 51.94vw;

  ${media.mobile} {
    ${text.mobile.body}
    font-size: 4vw;
    width: 100%;
  }
`

const Arrow = styled.img`
  width: 1.88vw;
  height: 3.47vw;

  ${media.mobile} {
    width: 7.2vw;
    height: 13.33vw;
  }
`

const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 18.4vw;
  width: 45.83vw;

  ${media.mobile} {
    margin-top: 4vw;
    height: auto;
    width: 100%;
  }
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

  ${media.mobile} {
    ${text.mobile.nav}
    height: 9.07vw;
    gap: 0vw;
    justify-content: space-between;
  }

  p {
    text-align: left;
    :nth-child(1) {
      width: 10.56vw;

      ${media.mobile} {
        width: fit-content;
      }
    }

    :nth-child(2) {
      width: fit-content;

      ${media.mobile} {
        text-align: right;
      }
    }
  }
`

const LargeTwo = styled(Large)`
  border-bottom: 1px solid ${colors.roseIvory};
  width: 100%;

  ${media.mobile} {
    padding-bottom: 6.67vw;
  }
`

const SmallTwo = styled(Small)`
  width: 100%;
  text-align: left;

  margin-top: 0.69vw;

  ${media.mobile} {
    margin-top: 2.67vw;
  }
`
