"use strict"; // fix lenis in safari

if (Webflow.env("editor") === undefined) {
  let lenis = null;

  function initializeLenis() {
    lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.7,
      infinite: false,
      gestureOrientation: "vertical",
      normalizeWheel: false,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  function startLenis() {
    if (lenis === null) {
      initializeLenis();
    }
    lenis.start();
    $("body").removeClass("stop-scroll"); // Remove the "stop-scroll" class
  }

  function stopLenis() {
    if (lenis === null) {
      initializeLenis();
    }
    lenis.stop();
    $("body").addClass("stop-scroll"); // Add the "stop-scroll" class
  }

  function toggleLenis() {
    if (lenis === null) {
      initializeLenis();
    }
    lenis.toggle();
    $("body").toggleClass("stop-scroll"); // Toggle the "stop-scroll" class
  }

  $("[data-lenis-start]").on("click", startLenis);
  $("[data-lenis-stop]").on("click", stopLenis);
  $("[data-lenis-toggle]").on("click", toggleLenis);
}
