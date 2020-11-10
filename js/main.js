const acBtns = document.querySelectorAll('.accordion__btn');
const showMore = document.querySelector('.showMore');

function accordionHandler() {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
}

acBtns.forEach(function(btn) {
	btn.addEventListener('click', accordionHandler)
});

showMore.addEventListener('click', function() {
    this.previousElementSibling.style.maxHeight = 100 + 'px';
});