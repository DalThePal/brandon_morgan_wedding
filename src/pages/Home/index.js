import React from 'react'

import Hero       from './sections/01-Hero'
import Date       from './sections/02-Date'
import Meet       from './sections/03-Meet'
import Tinder     from './sections/04-Tinder'
import Snuggle    from './sections/05-Snuggle'
import Wedlocked  from './sections/06-Wedlocked'

const Home = () => {
  return (
    <>
      <Hero/>
      <Date/>
      <Meet/>
      <Tinder/>
      <Snuggle/>
      <Wedlocked/>
    </>
  )
}

export default Home
