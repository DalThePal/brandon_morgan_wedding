import React, { useEffect, useState } from 'react'
import gsap, { ScrollTrigger, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Scroll = ({ children }) => {

  const [wrapper, setWrapper] = useState(null)
  const [content, setContent] = useState(null)

  useEffect(() => {
    if (wrapper && content) {
      ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
        wrapper,
        content
      })
    }
  }, [wrapper, content])

  return (
    <div id="scroll-wrapper" ref={ref => setWrapper(ref)}>
      <div ref={ref => setContent(ref)}>
        {children}
      </div>
    </div>
  )
};

export default Scroll;

