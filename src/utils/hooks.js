import { desktop, tablet, mobile } from 'styles/media'
import { useEffect } from 'react'
import gsap from 'gsap'

export const useCloudMovement = (refs) => {

  useEffect(() => {
    if (refs) {
      const mouseMove = (e) => {
        gsap.to(refs, {
          stagger: 0.03,
          x: -e.clientX / 30,
          y: -e.clientY / 30
        })
      }
  
      window.addEventListener('mousemove', mouseMove)
  
      return () => {
        window.removeEventListener('mousemove', mouseMove)
      }
    }
  }, [refs])
}


export const useMedia = (fw, d, t, m) => {

  if (window.innerWidth > desktop) {
    return fw
  } else if (window.innerWidth > tablet) {
    return d
  } else if (window.innerWidth > mobile) {
    return t
  } else {
    return m
  }
}
