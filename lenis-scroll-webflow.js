"use strict"; // fix lenis in safari

if (Webflow.env("editor") === undefined) {
  const lenis = new Lenis({
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

  $("[data-lenis-start]").on("click", function () {
    lenis.start();
    $("body").removeClass("stop-scroll"); // Add this line to remove the "stop-scroll" class
  });
  $("[data-lenis-stop]").on("click", function () {
    lenis.stop();
    $("body").addClass("stop-scroll"); // Add this line to add the "stop-scroll" class
  });
  $("[data-lenis-toggle]").on("click", function () {
    $(this).toggleClass("stop-scroll");
    if ($(this).hasClass("stop-scroll")) {
      lenis.stop();
      $("body").addClass("stop-scroll"); // Add this line to add the "stop-scroll" class
    } else {
      lenis.start();
      $("body").removeClass("stop-scroll"); // Add this line to remove the "stop-scroll" class
    }
  });

  function connectToScrollTrigger() {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
  }
  // Uncomment this if using GSAP ScrollTrigger
  connectToScrollTrigger();
}
