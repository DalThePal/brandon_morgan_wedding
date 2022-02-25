import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap/all";
import { useLocation } from 'react-router-dom'

import { tablet, mobile } from 'styles/media'

import 'locomotive-scroll/dist/locomotive-scroll.css'

gsap.registerPlugin(ScrollTrigger);

const scrollOptions = {
  smooth: true,
  getDirection: true,
  touchMultiplier: 1.5,
  multiplier: 1.2,
  lerp: 0.1,
  firefoxMultiplier: 100,
  getSpeed: true,
  resetNativeScroll: true,
  smartphone: {
    breakpoint: mobile,
    smooth: true
  },
  tablet: {
    breakpoint: tablet,
    smooth: true
  }
};

const Scroll = () => {

  const { pathname } = useLocation()

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(".smooth-scroll"),
      ...scrollOptions,
    });

    locomotiveScroll.update();

    // Exposing to the global scope for ease of use.
    window.locomotiveScroll = locomotiveScroll;

    locomotiveScroll.on("scroll", ScrollTrigger.update);
    locomotiveScroll.on("call", (name, dir) => {
      const event = new Event(`${name}-${dir}`)
      window.dispatchEvent(event)
    })

    const smoothScroll = document.querySelector(".smooth-scroll")

    ScrollTrigger.scrollerProxy(".smooth-scroll", {
      scrollTop(value) {
        return arguments.length
          ? locomotiveScroll.scrollTo(value, 0, 0)
          : locomotiveScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: smoothScroll?.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update());
    ScrollTrigger.refresh();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [pathname]);

  return null;
};

export default Scroll;
