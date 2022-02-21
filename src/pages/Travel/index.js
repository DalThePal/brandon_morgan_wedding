import React from 'react'

import Hero       from './sections/01-Hero'
import Wedding    from './sections/02-Wedding'
import Weekend    from './sections/03-Weekend' 
import Clouds     from './sections/04-Clouds'
import JetSetters from './sections/05-JetSetters'
import Hotels     from './sections/06-Hotels'
import RSVP       from './sections/07-RSVP'

import Footer from 'components/Footer'

const Travel = () => {
  return (
    <>
      <Hero/>
      <Wedding/>
      <Weekend/>
      <Clouds/>
      <JetSetters/>
      <Hotels/>
      <RSVP/>
      <Footer diamond/>
    </>
  )
}

export default Travel
