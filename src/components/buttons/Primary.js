import React, { useState } from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import text   from 'styles/text'
import media  from 'styles/media'

import Arrows from 'components/Arrows'

const Primary = ({ children, onClick }) => {

  const [trigger, setTrigger] = useState(false)

  return (
    <Wrapper onMouseEnter={() => setTrigger(true)} onMouseLeave={() => setTrigger(false)} onClick={onClick}>
      <Arrows left trigger={trigger} color={colors.mauve600}/>
      {children}
      <Arrows trigger={trigger} color={colors.mauve600}/>
    </Wrapper>
  )
}

export default Primary

const Wrapper = styled.div`
  ${text.desktop.nav}
  background-color: ${colors.pink400};
  color: ${colors.mauve600};
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: fit-content;

  height: 4.931vw;
  border-radius: 5.208vw;
  padding: 1.389vw 2.083vw;

  ${media.mobile} {
    ${text.mobile.nav}
    height: 18.933vw;
    border-radius: 20vw;
    padding: 5.333vw 8vw;
  }
`
