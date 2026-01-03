const section = document.querySelector("#three");
const spans = document.querySelectorAll("#three span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
