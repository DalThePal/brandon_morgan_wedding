import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import colors from 'styles/colors'

import Header     from 'components/Header'
import Transition from 'components/Transition'

import  Home    from 'pages/Home'
import  Travel  from 'pages/Travel'
import  Details from 'pages/Details'
import  RSVP    from 'pages/RSVP'

const App = () => {
  return (
    <Wrapper id="main">
      <Header/>

      <Routes>
        <Route path="/"         element={<Home/>}   />
        <Route path="/travel"   element={<Travel/>} />
        <Route path="/details"  element={<Details/>}/>
        <Route path="/rsvp"     element={<RSVP/>}   />
      </Routes>

      <Transition/>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${colors.background};
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
`
