import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import { gradients } from 'styles/colors'

import Scroll from 'components/Scroll'
import Header from 'components/Header'
import Footer from 'components/Footer'

import Home from 'pages/Home'

const App = () => {
  return (
    <Wrapper className='smooth-scroll'>
      <Scroll/>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

      <Footer/>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  width: 100%;
  background: ${gradients.darkPink};
  overflow: hidden;
`
