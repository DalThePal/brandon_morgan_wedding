import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import text from 'styles/text'

const Snuggle = () => {
  return (
    <Wrapper data-scroll-section>
      <Text>
        Morgan and Brandon spent the next 3 years 
        snuggling their two large hound dogs, taking 
        trips, making new friends while enjoying old 
        ones, 
      </Text>
    </Wrapper>
  )
}

export default Snuggle

const Wrapper = styled.section`
  width: 100%;

  height: 66.944vw;
`

const Text = styled.p`
  ${text.desktop.h6}
  position: absolute;
  color: ${colors.roseIvory};
  left: 50%;
  transform: translateX(-50%);

  width: 83.333vw;
  top: 17.361vw;
`
