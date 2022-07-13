import React from 'react'
import Footer from 'components/Footer'

import Hero from './sections/01-Hero'

const RSVP = () => {
  return (
    <>
      <Hero/>
      <Footer
        diamond
        leftText={"We're getting married. You're getting a hangover."}
      />
    </>
  )
}

export default RSVP
