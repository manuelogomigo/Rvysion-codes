$(".section.dark").each(function (index) {
  ScrollTrigger.create({
    trigger: this,
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav-link, .button, .svg-arrow").addClass("light");
      $(".logo.is-1").css("display", "block");
      $(".logo.is-2").css("display", "none");
    },
    onLeave: () => {
      $(".nav-link, .button, .svg-arrow").removeClass("light");
    }
  });
});

$(".section.light").each(function (index) {
  ScrollTrigger.create({
    trigger: this,
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav-link, .button, .svg-arrow").removeClass("light");
      $(".logo.is-2").css("display", "block");
      $(".logo.is-1").css("display", "none");
    },
    onLeave: () => {
      $(".nav-link, .button, .svg-arrow").removeClass("light");
    }
  });
});
