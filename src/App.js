import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import colors from 'styles/colors'

import Providers  from 'components/Providers'
import Scroll     from 'components/Scroll'
import Header     from 'components/Header'
import Registry   from 'components/RegistryModal'
import Transition from 'components/Transition'

import Home   from 'pages/Home'
import Travel from 'pages/Travel'

const App = () => {
  return (
    <Providers>
      <Wrapper className='smooth-scroll' data-scroll-container>
        <Scroll/>
        <Header/>

        <Routes>
          <Route path="/"       element={<Home/>}   />
          <Route path="/travel" element={<Travel/>} />
        </Routes>

        <Transition/>
        <Registry/>
      </Wrapper>
    </Providers>
  );
}

export default App;

const Wrapper = styled.main`
  width: 100%;
  background: ${colors.background};
  overflow: hidden;
`
