$(".section.dark").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav-link, .button, .svg-arrow").addClass("light");
      $(".logo.is-1").removeClass("hide-this");
      $(".logo.is-2").addClass("hide-this");
    },
    onEnterBack: () => {
      $(".nav-link, .button, .svg-arrow").addClass("light");
      $(".logo.is-1").removeClass("hide-this");
      $(".logo.is-2").addClass("hide-this");
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
      $(".logo.is-1").addClass("hide-this");
      $(".logo.is-2").removeClass("hide-this");
    },
    onEnterBack: () => {
      $(".nav-link, .button, .svg-arrow").removeClass("light");
      $(".logo.is-1").addClass("hide-this");
      $(".logo.is-2").removeClass("hide-this");
    }
  });
});
