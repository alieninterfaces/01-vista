import "./styles.scss";

import "./app/components/NavItem";

import gsap from "gsap";

import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(
  Draggable,
  InertiaPlugin,
  ScrollTrigger,
  Observer,
  ScrollSmoother
);

ScrollSmoother.create({
  normalizeScroll: true,
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});
