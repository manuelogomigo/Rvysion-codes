$(".section.dark").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav-link, .logo, .button, .svg-arrow, .menu-button, .menu-line").addClass("light");
    },
    onEnterBack: () => {
      $(".nav-link, .logo, .button, .svg-arrow, .menu-button, .menu-line").addClass("light");
    }
  });
});

$(".section.light").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav-link, .logo, .button, .svg-arrow, .menu-button, .menu-line").removeClass("light");
    },
    onEnterBack: () => {
      $(".nav-link, .logo, .button, .svg-arrow, .menu-button, .menu-line").removeClass("light");
    }
  });
});