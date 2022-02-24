import React, { useState } from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import media  from 'styles/media'

import Arrows from 'components/Arrows'

const ListItem = ({ children, onClick }) => {

  const [arrowsTrigger, setArrowsTrigger] = useState(false)

  return (
    <Wrapper 
      onMouseEnter={() => setArrowsTrigger(true)} 
      onMouseLeave={() => setArrowsTrigger(false)}
      onClick={onClick}
    >
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
  border-style: solid;
  border-color: ${colors.roseIvory};

  height: 3.472vw;
  border-top-width: 0.069vw;
  margin-bottom: 1.042vw;

  ${media.mobile} {
    height: 13.333vw;
    border-top-width: 0.267vw;
    margin-bottom: 4vw;
  }
`
