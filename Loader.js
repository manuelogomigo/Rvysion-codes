// variables
let customEase =
  "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1";
let counter = {
  value: 0
};
let loaderDuration = 10;

// If not a first time visit in this tab
if (sessionStorage.getItem("visited") !== null) {
  loaderDuration = 2;
  counter = {
    value: 75
  };
}
sessionStorage.setItem("visited", "true");

function updateLoaderText() {
  let progress = Math.round(counter.value);
  $(".loader_number").text(progress);
}

let tl2 = gsap.timeline();
let tl = gsap.timeline({
  onComplete: () => {
    tl2
      .fromTo(
        ".nav",
        {
          opacity: 0,
          y: "-100%"
        },
        {
          opacity: 1,
          duration: 0.8,
          y: "0%",
          ease: "power1.inOut"
        }
      )
      .fromTo(
        ".hero-content",
        {
          scale: 0.9,
          yPercent: 20,
          opacity: 0
        },
        {
          scale: 1,
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.inOut"
        },
        ">-0.5"
      )
      .fromTo(
        ".reel-image",
        {
          yPercent: 20,
          opacity: 0
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power1.inOut"
        },
        ">-0.7"
      );
  }
});

tl.to(counter, {
  value: 100,
  onUpdate: updateLoaderText,
  duration: loaderDuration,
  ease: CustomEase.create("custom", customEase)
});

tl.to(
  ".intro-load",
  {
    width: "100%",
    duration: loaderDuration,
    ease: CustomEase.create("custom", customEase)
  },
  0
)

  .to(".intro_split", {
    height: 0,
    ease: "power1.inOut"
  })
  .to(
    ".loader",
    {
      display: "none"
    },
    "<"
  );
