const acBtns = document.querySelectorAll(".accordion__btn");

function accordionHandler() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

acBtns.forEach(function(btn) {
	btn.addEventListener("click", accordionHandler)
});