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
    $('.tabBody:first').show();    
    
    $('.tabBtn').click(function() {
        $('.tabBody').hide();
        let activeTab = $(this).attr('rel');
        $('#' + activeTab).fadeIn();
            
        $('.tabBtn').removeClass('active');
        $(this).addClass('active');
    });
});


