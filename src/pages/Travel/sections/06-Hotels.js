import React from 'react'
import styled from 'styled-components'

import { useMedia } from 'utils/hooks'

import colors from 'styles/colors'
import text   from 'styles/text'
import media  from 'styles/media'

import ListItem from 'components/ListItem'

const Hotels = () => {

  const HOTEL_DATA = [
    {
      title: useMedia(
        "The Marriott Hotel, Salt Lake City", 
        "The Marriott Hotel, Salt Lake City", 
        "The Marriott Hotel, Salt Lake City",
        "The Marriott Hotel, SLC"
      ),
      href: "https://www.marriott.com/en-us/hotels/slcut-salt-lake-marriott-downtown-at-city-creek/overview/"
    },
    {
      title: "The Hotel Monaco",
      href: "https://www.monaco-saltlakecity.com/"
    },
    {
      title: useMedia(
        "The Hilton at Salt Lake City Center",
        "The Hilton at Salt Lake City Center",
        "The Hilton at Salt Lake City Center",
        "The Hilton at SLC Center",
      ),
      href: "https://www.hilton.com/en/hotels/slccchh-hilton-salt-lake-city-center/?cid=&WT.mc_id=&dclid=&gclid=&AWC="
    },
    {
      title: "Hyatt House Pleasant Grove",
      href: "https://www.hyatt.com/en-US/hotel/utah/hyatt-house-provo-pleasant-grove/pvuxp"
    },
  ]

  const handleClick = (href) => {
    window.open(href, '__blank')
  }

  const listItems = HOTEL_DATA.map((item, index) => {
    return (
      <ListItem key={index} onClick={() => handleClick(item.href)}>
        <P>{item.title}</P>
      </ListItem>
    )
  })

  return (
    <Wrapper >
      <H6>
        While you’re welcome to reserve lodging wherever 
        you feel most comfortable, we’d like to suggest some options.
      </H6>
      <UL>
        {listItems}
      </UL>
    </Wrapper>
  )
}

export default Hotels

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  will-change: transform;

  height: 52.153vw;
  padding-top: 20.833vw;
  padding-left: 8.333vw;
  padding-right: 8.333vw;

  ${media.mobile} {
    height: 137.333vw;
    padding-top: 26.667vw;
    padding-left: 5.333vw;
    padding-right: 5.333vw;
  }
`

const H6 = styled.h6`
  ${text.desktop.h7}
  color: ${colors.roseIvory};

  width: 61.806vw;
  margin-bottom: 3.472vw;

  ${media.mobile} {
    ${text.mobile.body}
    width: 100%;
    margin-bottom: 13.333vw;
  }
`

const UL = styled.ul`
  width: 100%;
`

const P = styled.p`
  ${text.desktop.body}
  color: ${colors.roseIvory};

  ${media.mobile} {
    font-family: SangBleu Sunrise;
    font-style: normal;
    font-weight: normal;
    font-size: 4.0vw;
    line-height: 150%;
  }
`
