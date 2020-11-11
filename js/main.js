const acBtns = document.querySelectorAll('.accordion__btn');
const showMore = document.querySelector('.showMore');

showMore.addEventListener('click', function() {
    this.previousElementSibling.style.maxHeight = 100 + '%';
    this.style.display = 'none';
    this.disabled = true;
});


for (let i = 0; i < acBtns.length; i++) {
    acBtns[i].addEventListener('click', function(){
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}

$(document).ready(function (){
    $('.scrollLink').click(function (e){
        e.preventDefault();
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
    });
});


