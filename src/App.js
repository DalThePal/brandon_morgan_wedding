import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import Scroll from 'components/Scroll'
import Header from 'components/Header'

import Home from 'pages/Home'

const App = () => {
  return (
    <Wrapper className='smooth-scroll'>
      <Scroll/>
      {/* <Header/> */}

      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  width: 100%;
  background: linear-gradient(90deg, #D699A1 0%, #D296A1 100%);
  overflow: hidden;
  
  height: 10000px;
`
