import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import colors from 'styles/colors'

const Header = () => {
  return (
    <Wrapper data-scroll-sticky data-scroll-target=".smooth-scroll">
      <Links>
        <StyledLink to="/">Details</StyledLink>
        <StyledLink to="/">Travel</StyledLink>
        <StyledLink to="/">Registry</StyledLink>
      </Links>  
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;

  height: 6.944vw;
  padding-top: 4.167vw;
  padding-left: 8.333vw;
  padding-right: 8.333vw;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  color: ${colors.roseIvory};
`
