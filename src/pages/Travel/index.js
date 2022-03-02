import React, { lazy, Suspense } from 'react'

import Hero       from './sections/01-Hero'
import Wedding    from './sections/02-Wedding'
const Weekend    = lazy(() => import('./sections/03-Weekend')) 
const Clouds     = lazy(() => import('./sections/04-Clouds'))
const JetSetters = lazy(() => import('./sections/05-JetSetters'))
const Hotels     = lazy(() => import('./sections/06-Hotels'))
const RSVP       = lazy(() => import('./sections/07-RSVP'))
const Footer     = lazy(() => import('components/Footer'))

const Travel = () => {
  return (
    <>
      <Hero/>
      <Wedding/>
      <Suspense fallback={<div/>}>
        <Weekend/>
        <Clouds/>
        <JetSetters/>
        <Hotels/>
        <RSVP/>
        <Footer 
          diamond
          leftText={"We Can't Say I Do Without You!"}
        />
      </Suspense>
    </>
  )
}

export default Travel
