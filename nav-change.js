$(".section.dark").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav-link, .button, .svg-arrow").addClass("light");
      $(".logo.is-1").show();
      $(".logo.is-2").hide();
    },
    onEnterBack: () => {
      $(".nav-link, .button, .svg-arrow").addClass("light");
      $(".logo.is-1").show();
      $(".logo.is-2").hide();
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
      $(".logo.is-2").show();
      $(".logo.is-1").hide();
    },
    onEnterBack: () => {
      $(".nav-link, .button, .svg-arrow").removeClass("light");
      $(".logo.is-2").show();
      $(".logo.is-1").hide();
    }
  });
});
