import React, { useState, useEffect, createContext } from 'react'
import { desktop, tablet, mobile } from 'styles/media'

export const ScreenContext    = createContext(null)
export const RegistryContext  = createContext(null)
export const RouteContext     = createContext(null)

const Providers = ({ children }) => {

  const [screen, setScreen] = useState({
    mobile    : false,
    tablet    : false,
    desktop   : false,
    fullWidth : false
  })

  const [registryOpen, setRegistryOpen] = useState(false)
  const [route, setRoute] = useState(null)

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
    <RouteContext.Provider value={{state: route, setState: setRoute}}>
      <ScreenContext.Provider value={screen}>
        <RegistryContext.Provider value={{state: registryOpen, setState: setRegistryOpen}}>
          {children}
        </RegistryContext.Provider>
      </ScreenContext.Provider>
    </RouteContext.Provider>
  )
}

export default Providers
