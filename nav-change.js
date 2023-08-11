$(".section.dark").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav-link, .button, .svg-arrow").addClass("light");
    },
    onEnterBack: () => {
      $(".nav-link, .button, .svg-arrow").addClass("light");
    }
  });
});

$(".section.light").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav-link, .button, .svg-arrow").removeClass("light");
    },
    onEnterBack: () => {
      $(".nav-link, .button, .svg-arrow").removeClass("light");
    }
  });
});

