$(".section.dark").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav-link, .logo, .logo2, .button, .svg-arrow").addClass("light");
    },
    onEnterBack: () => {
      $(".nav-link, .logo, .logo2, .button, .svg-arrow").addClass("light");
    }
  });
});

$(".section.light").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav-link, .logo, .logo2, .button, .svg-arrow").removeClass("light");
    },
    onEnterBack: () => {
      $(".nav-link, .logo, .logo2, .button, .svg-arrow").removeClass("light");
    }
  });
});

