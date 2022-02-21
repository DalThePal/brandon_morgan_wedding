import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import colors from 'styles/colors'

import Scroll from 'components/Scroll'
import Header from 'components/Header'

import Home   from 'pages/Home'
import Travel from 'pages/Travel'

const App = () => {
  return (
    <Wrapper className='smooth-scroll'>
      <Scroll/>
      <Header/>

      <Routes>
        <Route path="/"       element={<Home/>}   />
        <Route path="/travel" element={<Travel/>} />
      </Routes>

    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  width: 100%;
  background: ${colors.background};
  overflow: hidden;
`
