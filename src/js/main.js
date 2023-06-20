import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/* scroll animation ↓ */

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

gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: { scrub: 0.3 },
});

/* cover ↓ */

var googleImgs = document.querySelectorAll(".container-picture");

googleImgs.forEach((googleImg) => {
  var cover = googleImg.querySelector(".cover");

  googleImg.addEventListener("mouseover", () => {
    cover.classList.add("cover-covering");
  });

  googleImg.addEventListener("mouseout", () => {
    cover.classList.remove("cover-covering");
  });
});
