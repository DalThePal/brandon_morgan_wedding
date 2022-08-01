import React from 'react'

import Scroll from 'components/Scroll'

import Hero       from './sections/01-Hero'
import Wedding    from './sections/02-Wedding'
import Weekend    from './sections/03-Weekend' 
import Clouds     from './sections/04-Clouds'
import JetSetters from './sections/05-JetSetters'
import Hotels     from './sections/06-Hotels'
import RSVP       from './sections/07-RSVP'
import Footer     from 'components/Footer'

const Travel = () => {
  return (
    <Scroll>
      <Hero/>
      <Wedding/>
      <Weekend/>
      <Clouds/>
      <JetSetters/>
      <Hotels/>
      <RSVP/>
      <Footer 
        diamond
        leftText={"We Can't Say I Do Without You!"}
      />
    </Scroll>
  )
}

export default Travel
