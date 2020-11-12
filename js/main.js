const acBtns = document.querySelectorAll('.accordion__btn');

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

    const partnerKey = $('.partners__item:nth-child(5)');
    partnerKey.nextAll().hide();
    $('.showMore').click(function(){
        partnerKey.nextAll().show();
        $(this).prop('disabled', true)
    });


    $('.scrollLink').click(function (e){
        e.preventDefault();
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
    });


    $('.tabBody').hide();
    $('.tabContainer > .tabBody:first-child').show();    
    
    $('.tabBtn').click(function() { 
        let curentTabBody = $('#' + $(this).attr('rel'));
        curentTabBody.siblings().hide();
        curentTabBody.fadeIn();
            
        $('.tabBtn').removeClass('active');
        $(this).addClass('active');
    });
});


