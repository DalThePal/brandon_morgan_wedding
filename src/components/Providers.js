import React, { useState, useEffect, createContext } from 'react'
import { desktop, tablet, mobile } from 'styles/media'

export const ScreenContext = createContext(null)

const Providers = ({ children }) => {

  const [screen, setScreen] = useState({
    mobile: false,
    tablet: false,
    desktop: false,
    fullWidth: false
  })

  useEffect(() => {
    const resize = () => {
      setScreen({
        mobile    : window.innerWidth <= mobile,
        tablet    : window.innerWidth <= tablet   && window.innerWidth > mobile,
        desktop   : window.innerWidth <= desktop  && window.innerWidth > tablet,
        fullWidth : window.innerWidth > desktop
      })
    }

    resize()
    
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <ScreenContext.Provider value={screen}>
      {children}
    </ScreenContext.Provider>
  )
}

export default Providers