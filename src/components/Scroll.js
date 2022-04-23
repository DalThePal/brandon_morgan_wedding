import React, { useEffect } from "react";
import styled from 'styled-components'
import gsap, { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

const Scroll = ({ children }) => {

  useEffect(() => {
    window.scrollTop = 0

    const scroller = ScrollSmoother.create({
      smooth: 1.2,           
      effects: true,           
      smoothTouch: 0.1,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content"
    });

    window.scroller = scroller

    return () => {
      scroller.kill()
    }
  }, []);

  return (
    <Wrapper id="smooth-wrapper">
      <Content id="smooth-content">
        {children}
      </Content>
    </Wrapper>
  );
};

export default Scroll;

const Wrapper = styled.div`

`

const Content = styled.div`

`