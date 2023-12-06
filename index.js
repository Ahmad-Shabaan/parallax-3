let scrollingElements = document.querySelectorAll(".scroll");

window.addEventListener("scroll", () => {
  let val = window.scrollY;
  for (let i = 0; i < scrollingElements.length; i++) {
    let rate = scrollingElements[i].dataset.rate;
    let dir = scrollingElements[i].dataset.dir;
    if (dir === "horizontal") {
      console.log(scrollingElements[i]);
      scrollingElements[i].style.transform = `translate3d(${
        val * rate
      }px,0 , 0)`;
    } else {
      scrollingElements[i].style.transform = `translate3d(0,${
        val * rate
      }px , 0)`;
    }
  }
});
