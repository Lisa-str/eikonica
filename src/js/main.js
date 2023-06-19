import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

var picutreRight = document.querySelectorAll(".picture-program-right");

picutreRight.forEach((picture) => {
  gsap.from(picture, {
    scrollTrigger: {
      trigger: picture,
    },
    opacity: 0,
    x: 300,
    duration: 2,
  });
});

var picutreLeft = document.querySelectorAll(".picture-program-left");

picutreLeft.forEach((picture) => {
  gsap.from(picture, {
    scrollTrigger: {
      trigger: picture,
    },
    opacity: 0,
    x: -300,
    duration: 2,
  });
});

var picutreLeft = document.querySelectorAll(".picture-program-left");

gsap.from(".box", {
  scrollTrigger: {
    trigger: "footer",
  },
  opacity: 0,
  x: 300,
  y: 300,
  duration: 1,
});
