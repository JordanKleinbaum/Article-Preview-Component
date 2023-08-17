// VARIABLES
const lightShareButton = document.querySelector(".share-button");
const darkShareButton = document.querySelector(".second-share-button");
const beforeClickArea = document.querySelector(".before-click");
const afterClickArea = document.querySelector(".after-click");

// FUNCTIONS
// FUNCTION FOR MOBILE VIEW
function display(hide, show) {
  hide.style.display = "none";
  show.style.display = "flex";
}

// ONCLICK EVENTS
// ONCLICK FOR MOBILE VIEW
lightShareButton.addEventListener("click", () => {
  if (window.innerWidth < 750) {
    display(beforeClickArea, afterClickArea);
  }
});

darkShareButton.addEventListener("click", () => {
  if (window.innerWidth < 750) {
    display(afterClickArea, beforeClickArea);
    if (desktopWidget.style.display === "flex") {
      desktopWidget.style.display = "none";
    }
  }
});

// ONCLICK FOR DESKTOP VIEW
const desktopWidget = document.querySelector(".after-click-left-desktop");

lightShareButton.addEventListener("click", () => {
  if (window.innerWidth >= 750) {
    if (desktopWidget.style.display === "flex") {
      lightShareButton.style.backgroundColor = "var(--BasicallyWhite)";
      desktopWidget.style.display = "none";
    } else {
      lightShareButton.setAttribute("fill", "var(--BasicallyWhite)");
      lightShareButton.style.backgroundColor = "var(--DarkGray)";
      desktopWidget.style.display = "flex";
    }
  }
});

darkShareButton.addEventListener("click", () => {
  if (window.innerWidth >= 750) {
    display(afterClickArea, beforeClickArea);
  }
});
