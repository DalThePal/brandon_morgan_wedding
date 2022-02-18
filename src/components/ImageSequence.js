import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import diamond00 from 'images/diamond_sequence/00.png'
import diamond01 from 'images/diamond_sequence/01.png'
import diamond02 from 'images/diamond_sequence/02.png'
import diamond03 from 'images/diamond_sequence/03.png'
import diamond04 from 'images/diamond_sequence/04.png'
import diamond05 from 'images/diamond_sequence/05.png'
import diamond06 from 'images/diamond_sequence/06.png'
import diamond07 from 'images/diamond_sequence/07.png'
import diamond08 from 'images/diamond_sequence/08.png'
import diamond09 from 'images/diamond_sequence/09.png'
import diamond10 from 'images/diamond_sequence/10.png'
import diamond11 from 'images/diamond_sequence/11.png'
import diamond12 from 'images/diamond_sequence/12.png'
import diamond13 from 'images/diamond_sequence/13.png'
import diamond14 from 'images/diamond_sequence/14.png'
import diamond15 from 'images/diamond_sequence/15.png'
import diamond16 from 'images/diamond_sequence/16.png'
import diamond17 from 'images/diamond_sequence/17.png'
import diamond18 from 'images/diamond_sequence/18.png'
import diamond19 from 'images/diamond_sequence/19.png'
import diamond20 from 'images/diamond_sequence/20.png'
import diamond21 from 'images/diamond_sequence/21.png'
import diamond22 from 'images/diamond_sequence/22.png'
import diamond23 from 'images/diamond_sequence/23.png'
import diamond24 from 'images/diamond_sequence/24.png'
import diamond25 from 'images/diamond_sequence/25.png'
import diamond26 from 'images/diamond_sequence/26.png'
import diamond27 from 'images/diamond_sequence/27.png'
import diamond28 from 'images/diamond_sequence/28.png'
import diamond29 from 'images/diamond_sequence/29.png'
import diamond30 from 'images/diamond_sequence/30.png'
import diamond31 from 'images/diamond_sequence/31.png'
import diamond32 from 'images/diamond_sequence/32.png'
import diamond33 from 'images/diamond_sequence/33.png'
import diamond34 from 'images/diamond_sequence/34.png'
import diamond35 from 'images/diamond_sequence/35.png'
import diamond36 from 'images/diamond_sequence/36.png'
import diamond37 from 'images/diamond_sequence/37.png'
import diamond38 from 'images/diamond_sequence/38.png'
import diamond39 from 'images/diamond_sequence/39.png'
import diamond40 from 'images/diamond_sequence/40.png'
import diamond41 from 'images/diamond_sequence/41.png'
import diamond42 from 'images/diamond_sequence/42.png'
import diamond43 from 'images/diamond_sequence/43.png'
import diamond44 from 'images/diamond_sequence/44.png'
import diamond45 from 'images/diamond_sequence/45.png'
import diamond46 from 'images/diamond_sequence/46.png'
import diamond47 from 'images/diamond_sequence/47.png'
import diamond48 from 'images/diamond_sequence/48.png'
import diamond49 from 'images/diamond_sequence/49.png'
import diamond50 from 'images/diamond_sequence/50.png'
import diamond51 from 'images/diamond_sequence/51.png'
import diamond52 from 'images/diamond_sequence/52.png'
import diamond53 from 'images/diamond_sequence/53.png'
import diamond54 from 'images/diamond_sequence/54.png'
import diamond55 from 'images/diamond_sequence/55.png'
import diamond56 from 'images/diamond_sequence/56.png'
import diamond57 from 'images/diamond_sequence/57.png'

const IMAGE_DATA = [
  diamond01,
  diamond02,
  diamond03,
  diamond04,
  diamond05,
  diamond06,
  diamond07,
  diamond08,
  diamond09,
  diamond10,
  diamond11,
  diamond12,
  diamond13,
  diamond14,
  diamond15,
  diamond16,
  diamond17,
  diamond18,
  diamond19,
  diamond20,
  diamond21,
  diamond22,
  diamond23,
  diamond24,
  diamond25,
  diamond26,
  diamond27,
  diamond28,
  diamond29,
  diamond30,
  diamond31,
  diamond32,
  diamond33,
  diamond34,
  diamond35,
  diamond36,
  diamond37,
  diamond38,
  diamond39,
  diamond40,
  diamond41,
  diamond42,
  diamond43,
  diamond44,
  diamond45,
  diamond46,
  diamond47,
  diamond48,
  diamond49,
  diamond50,
  diamond51,
  diamond52,
  diamond53,
  diamond54,
  diamond55,
  diamond56,
  diamond57,
]

const ImageSequence = () => {

  const images = useMemo(() => IMAGE_DATA.map((image, index, arr) => {
    return (
      <Img 
        className={'diamond-frame'} 
        key={index} 
        src={image} 
        alt={`diamond frame ${index}`}
        $zIndex={arr.length + 1 - index}
      />
    )
  }), [])

  useEffect(() => {
    if (images) {
      gsap.fromTo('.diamond-frame', {
        visibility: 'visible'
      }, {
        repeat: -1,
        repeatDelay: -0.01,
        stagger: 0.05,
        duration: 0.05,
        visibility: 'hidden',
        clear: true
      })
    }
  }, [images])

  return (
    <Wrapper>
      <Img src={diamond00} alt="diamond frame -1" $zIndex={1}/>
      {images}
    </Wrapper>
  )
}

export default ImageSequence

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

const Img = styled.img`
  position: absolute;
  z-index: ${props => props.$zIndex};
  height: 100%;
  width: 100%;
  object-fit: contain;
`
