import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import colors from 'styles/colors'

import Scroll     from 'components/Scroll'
import Header     from 'components/Header'
import Registry   from 'components/RegistryModal'
import Transition from 'components/Transition'

const Home   = lazy(() => import('pages/Home'))
const Travel = lazy(() => import('pages/Travel'))

const App = () => {
  return (
    <Wrapper className='smooth-scroll' data-scroll-container>
      <Scroll/>
      <Header/>

      <Routes>
          <Route path="/"       element={<Suspense fallback={<div/>}><Home/></Suspense>}   />
          <Route path="/travel" element={<Suspense fallback={<div/>}><Travel/></Suspense>} />
      </Routes>

      <Transition/>
      <Registry/>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  width: 100%;
  background: ${colors.background};
  overflow: hidden;
`
