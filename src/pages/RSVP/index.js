import React from 'react'
import Footer from 'components/Footer'
import Scroll from 'components/Scroll'

import Hero from './sections/01-Hero'

const RSVP = () => {
  return (
    <Scroll>
      <Hero/>
      <Footer
        diamond
        leftText={"We're getting married. You're getting a hangover."}
      />
    </Scroll>
  )
}

export default RSVP
