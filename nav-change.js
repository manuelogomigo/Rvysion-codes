$(".section.dark").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav-link, .logo, .button, .svg-arrow").addClass("light");
    },
    onEnterBack: () => {
      $(".nav-link, .logo, .button, .svg-arrow").addClass("light");
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
    },
    onEnterBack: () => {
      $(".nav-link, .logo, .button, .svg-arrow").removeClass("light");
    }
  });
});



//Menu Button
//Button Change
$(document).ready(function () {
  if ($(window).width() >= 992) {
    var lastScrollPosition = 0;
    var navMenuHeight = $(".nav-menu").outerHeight();
    var navMenuHiddenPosition = -navMenuHeight;
    var scrollOffset = 4; // Adjust this value to set the desired offset in ems

    var pixelsPerEm = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );

    $(window).scroll(function () {
      var currentScrollPosition = $(this).scrollTop();
      var scrollOffsetPixels = scrollOffset * pixelsPerEm;

      if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down, hide the nav-menu
        $(".nav-menu").css(
          "transform",
          "translateY(" + navMenuHiddenPosition + "px)"
        );
      } else {
        // Scrolling up
        if (currentScrollPosition <= scrollOffsetPixels) {
          // Reached the offset point or top of the page, hide the nav-menu
          $(".nav-menu").css(
            "transform",
            "translateY(" + navMenuHiddenPosition + "px)"
          );
        } else {
          // Show the nav-menu
          $(".nav-menu").css("transform", "translateY(0)");
        }
      }

      lastScrollPosition = currentScrollPosition;
    });
  }
});

$(".section").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: (self) => {
      if ($(self.trigger).hasClass("dark")) {
        $(".menu-line, .menu-button").addClass("light");
      } else {
        $(".menu-line, .menu-button").removeClass("light");
      }
    },
    onEnterBack: (self) => {
      if ($(self.trigger).hasClass("dark")) {
        $(".menu-line, .menu-button").addClass("light");
      } else {
        $(".menu-line, .menu-button").removeClass("light");
      }
    }
  });
});

// Get the menu button element
const menuButton = document.querySelector(".menu-button");

// Get all elements with class .menu-line.light
const menuLines = document.querySelectorAll(".menu-line.light");

// Store the default colors for each menu line
const defaultColors = [];
menuLines.forEach((menuLine) => {
  defaultColors.push({
    element: menuLine,
    color: menuLine.style.backgroundColor
  });
});

// Store the default text color of the menu button
const defaultTextColor = menuButton.style.color;

// Flag to track the button state
let isClicked = false;

function handleClick() {
  if (isClicked) {
    console.log("Button clicked");
    // Set the colors back to default with a delay
    setTimeout(() => {
      defaultColors.forEach(({ element, color }) => {
        element.style.backgroundColor = color;
      });
      menuButton.style.color = defaultTextColor;
      console.log("Color reset to default");
    }, 200); // 200 milliseconds delay
  } else {
    // Set the new colors with a delay
    setTimeout(() => {
      menuLines.forEach((menuLine) => {
        menuLine.style.transition = "background-color 0.2s ease";
        menuLine.style.backgroundColor = "#191b1c";
      });
      menuButton.style.transition = "color 0.2s ease";
      menuButton.style.color = "#191b1c";
      console.log("Color changed");
    }, 200); // 200 milliseconds delay
  }

  // Toggle the flag
  isClicked = !isClicked;
}

// Add click event listener to the menu button
menuButton.addEventListener("click", handleClick);

$(document).ready(function () {
  // Script 1
  $(".button:not(.light)").mouseenter(function () {
    $(this).find(".black-cover-button").css("transform", "translateY(0%)");
    $(this).css("color", "white");
    $(this).find(".svg-arrow").css("filter", "invert(100%)");
  });

  $(".button:not(.light)").mouseleave(function () {
    $(this).find(".black-cover-button").css("transform", "translateY(120%)");
    $(this).css("color", "black");
    $(this).find(".svg-arrow").css("filter", "invert(0%)");
  });

  // Script 2
  $(".button.light").mouseenter(function () {
    $(this).find(".black-cover-button").css({
      transform: "translateY(0%)",
      "background-color": "white"
    });
    $(this).css("color", "black");
    $(this).find(".svg-arrow").css("filter", "invert(0%)");
  });

  $(".button.light").mouseleave(function () {
    $(this).find(".black-cover-button").css({
      transform: "translateY(120%)",
      "background-color": "black"
    });
    $(this).css("color", "white");
    $(this).find(".svg-arrow.light").css("filter", "invert(100%)");
  });
});
