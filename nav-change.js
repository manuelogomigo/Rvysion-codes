$(".section.dark").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav-link, .logo, .button, .svg-arrow").addClass("light");
      changeLogoImage(true); // Add this line to change the logo image
    },
    onEnterBack: () => {
      $(".nav-link, .logo, .button, .svg-arrow").addClass("light");
      changeLogoImage(true); // Add this line to change the logo image
    },
    onLeave: () => {
      $(".nav-link, .logo, .button, .svg-arrow").removeClass("light");
      changeLogoImage(false); // Add this line to change the logo image
    },
    onLeaveBack: () => {
      $(".nav-link, .logo, .button, .svg-arrow").removeClass("light");
      changeLogoImage(false); // Add this line to change the logo image
    }
  });
});

$(".section.light").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav-link, .logo, .button, .svg-arrow").removeClass("light");
      changeLogoImage(false); // Add this line to change the logo image
    },
    onEnterBack: () => {
      $(".nav-link, .logo, .button, .svg-arrow").removeClass("light");
      changeLogoImage(false); // Add this line to change the logo image
    },
    onLeave: () => {
      $(".nav-link, .logo, .button, .svg-arrow").addClass("light");
      changeLogoImage(true); // Add this line to change the logo image
    },
    onLeaveBack: () => {
      $(".nav-link, .logo, .button, .svg-arrow").addClass("light");
      changeLogoImage(true); // Add this line to change the logo image
    }
  });
});

// Function to change the logo image
function changeLogoImage(isLight) {
  var $logo = $(".logo"); // Assuming you have the logo element as a jQuery object
  if (isLight) {
    $logo.attr("src", "https://uploads-ssl.webflow.com/64457c55e38bb781a90b3770/64d658084b05b3c0a45205ae_Rvysion%20Logo%20(2).svg");
  } else {
    $logo.attr("src", "https://uploads-ssl.webflow.com/64457c55e38bb781a90b3770/64d623188b2d5acba12e9a8e_Rvysion%20Logo%20(1).svg");
  }
}
