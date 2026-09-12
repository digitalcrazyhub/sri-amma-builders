/* ===============================
   FOOTER SLIDE ANIMATION
=================================*/

const footerCols = document.querySelectorAll(".footer-col");

function revealFooter() {
  const triggerBottom = window.innerHeight * 0.85;

  footerCols.forEach(col => {
    const boxTop = col.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      col.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealFooter);
window.addEventListener("load", revealFooter);