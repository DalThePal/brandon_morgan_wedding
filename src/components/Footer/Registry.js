import React from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import colors from 'styles/colors'
import media  from 'styles/media'

import Animation  from 'components/AppearAnimation'
import Primary    from 'component/buttons/Primary'
import Secondary  from 'components/buttons/Secondary'

const Registry = () => {
  return (
    <Wrapper>

    </Wrapper>
  )
}

export default Registry

const Wrapper = styled.div`
  background-color: ${colors.mauve800};
  opacity: 0.75;
  position: absolute;
  bottom: 0;
  left: 0;

  height: 100vh;
  width: 100vw;
`
