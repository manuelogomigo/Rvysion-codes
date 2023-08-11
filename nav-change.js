$(".section.dark").each(function (index) {
  const darkSection = $(this);
  const logo1 = darkSection.find(".logo.is-1");
  const logo2 = darkSection.find(".logo.is-2");

  ScrollTrigger.create({
    trigger: darkSection,
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      logo1.show();
      logo2.hide();
      $(".nav-link, .button, .svg-arrow").addClass("light");
    },
    onEnterBack: () => {
      logo1.show();
      logo2.hide();
      $(".nav-link, .button, .svg-arrow").addClass("light");
    }
  });
});

$(".section.light").each(function (index) {
  const lightSection = $(this);
  const logo1 = lightSection.find(".logo.is-1");
  const logo2 = lightSection.find(".logo.is-2");

  ScrollTrigger.create({
    trigger: lightSection,
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      logo2.show();
      logo1.hide();
      $(".nav-link, .button, .svg-arrow").removeClass("light");
    },
    onEnterBack: () => {
      logo2.show();
      logo1.hide();
      $(".nav-link, .button, .svg-arrow").removeClass("light");
    }
  });
});
