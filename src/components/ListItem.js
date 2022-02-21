import React, { useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import colors from 'styles/colors'

import Arrows from 'components/Arrows'

const ListItem = ({ children }) => {

  const [arrowsTrigger, setArrowsTrigger] = useState(false)

  return (
    <Wrapper onMouseEnter={() => setArrowsTrigger(true)} onMouseLeave={() => setArrowsTrigger(false)}>
      <Arrows left color={colors.roseIvory} trigger={arrowsTrigger}/>
        {children}
      <Arrows color={colors.roseIvory} trigger={arrowsTrigger}/>
    </Wrapper>
  )
}

export default ListItem

const Wrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  height: 3.472vw;
  border-top: 0.069vw solid ${colors.roseIvory};
  margin-bottom: 1.042vw;
`
