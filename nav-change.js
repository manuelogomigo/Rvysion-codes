$(".section.dark").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav-link, .button, .svg-arrow").addClass("light");
      $(".logo.is-1").css("visibility", "visible");
      $(".logo.is-2").css("visibility", "hidden");
    },
    onEnterBack: () => {
      $(".nav-link, .button, .svg-arrow").addClass("light");
      $(".logo.is-1").css("visibility", "visible");
      $(".logo.is-2").css("visibility", "hidden");
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
      $(".logo.is-2").css("visibility", "visible");
      $(".logo.is-1").css("visibility", "hidden");
    },
    onEnterBack: () => {
      $(".nav-link, .button, .svg-arrow").removeClass("light");
      $(".logo.is-2").css("visibility", "visible");
      $(".logo.is-1").css("visibility", "hidden");
    }
  });
});
