import React from 'react'

import Hero           from './sections/01-Hero'
import Transportation from './sections/02-Transportation'
import DressCode      from './sections/03-DressCode'
import Kids           from './sections/04-Kids'
import Footer         from  'components/Footer'

const Details = () => {
  return (
    <>
      <Hero/>
      <Transportation/>
      <DressCode/>
      <Kids/>
      <Footer 
        diamond 
        leftText={"We're getting married. You're getting a hangover."}
      />
    </>
  )
}

export default Details
