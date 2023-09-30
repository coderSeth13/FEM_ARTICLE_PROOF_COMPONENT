// Declare Variables for the button and the tooltip
const toolTip = document.querySelector("[data-tooltip-js]"),
  shareBtn = document.querySelector("[data-share-btn-js]");

// Toogling the tooltip state with an eventlistener
shareBtn.addEventListener("click", () => {
  toolTip.classList.toggle("article__tooltip-toggle");
});
