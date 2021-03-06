import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'
import text from 'styles/text'
import media from 'styles/media'

import { ReactComponent as CheckSVG } from 'images/check.svg'

const Checkbox = ({ selected, setSelected, label }) => {

  return (
    <Wrapper onClick={setSelected}>
      <Box selected={selected}>
        {selected && <Check/>}
      </Box>
      <Text>{label}</Text>
    </Wrapper>
  )
}

export default Checkbox

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 0.69vw;

  ${media.mobile} {
    gap: 2.67vw;
  }
`

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.selected ? colors.roseIvory : 'transparent'};
  border: 1px solid ${colors.roseIvory};
  transition: 500ms;

  width: 1.74vw;
  height: 1.74vw;

  ${media.mobile} {
    width: 6.67vw;
    height: 6.67vw;
  }
`

const Check = styled(CheckSVG)`
  width: 0.97vw;
  height: 0.63vw;

  ${media.mobile} {
    width: 3.73vw;
    height: 2.4vw;
  }
`

const Text = styled.p`
  color: ${colors.roseIvory};
  ${text.desktop.nav}

  ${media.mobile} {
    ${text.mobile.nav}
  }
`
