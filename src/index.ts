import "./styles.scss";

import "./app/components/NavItem";

import gsap from "gsap";

import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { MorphSVGPlugin } from "gsap/all";

gsap.registerPlugin(
  Draggable,
  InertiaPlugin,
  ScrollTrigger,
  Observer,
  ScrollSmoother,
  MorphSVGPlugin
);

ScrollSmoother.create({
  normalizeScroll: true,
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

const waveTL = gsap.timeline({
  repeat: -1,
  yoyo: true,
  ease: "none",
});

waveTL.to("#wave path", {
  duration: 5,
  morphSVG: "#wave3 path",
  ease: "quad.inOut",
});

waveTL.to("#wave path", {
  duration: 5,
  morphSVG: "#wave2 path",
  ease: "quad.inOut",
});
