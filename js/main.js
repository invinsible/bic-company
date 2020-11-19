const acBtns = document.querySelectorAll('.accordion__btn');
const header = document.querySelector(".header");
const upBtn = document.querySelector('.upBtn');
const logo = document.querySelector('.logo img');

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


    
window.addEventListener('scroll', trackScroll);
window.addEventListener('scroll', stickHeader);
upBtn.addEventListener('click', backToTop);

function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        upBtn.classList.remove('hide');
    }
    if (scrolled < coords) {
        upBtn.classList.add('hide');
    }
}

function backToTop() {
    if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 10);
    }
}


let sticky = header.offsetTop;

function stickHeader() {
    if (window.pageYOffset > 130) {        
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

$(document).ready(function (){
    

    const partnerKey = $('.partners__item:nth-child(5)');
    partnerKey.nextAll().hide();
    $('.showMore').click(function(){
        partnerKey.nextAll().show();
        $(this).prop('disabled', true)
    });   


    // Cache selectors
    var lastId,
    topMenu = $(".menu"),
    topMenuHeight = topMenu.outerHeight()+135,
    // All list items
    menuItems = topMenu.find(".scrollLink"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
        var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({ 
        scrollTop: offsetTop
        }, 800);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
            return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#"+id+"']").parent().addClass("active");
        }                   
    });


    $('.tabBody').hide();
    $('.tabContainer > .tabBody:first-child').show();    
    
    $('.tabBtn').click(function() { 
        let curentTabBody = $('#' + $(this).attr('rel'));
        curentTabBody.siblings().hide();
        curentTabBody.fadeIn();
            
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    $('.phone__link').click(function(e){
        e.preventDefault();
        $('.phone__link').removeClass('active');
        $(this).addClass('active');
        let phone = $(this).data('phone');
       
        $('.phone__number').text(phone);
        $('.phone__number').attr('href', phone);
    });
});




ymaps.ready(function(){

    let myMap = new ymaps.Map("map", {
        center: [59.96794514770856,30.320952949501976],
        zoom: 10,
        controls: ['zoomControl']
    });   
    
    let coords = [
        {
            cd: [ 59.905295421119,30.270380973816 ],
            title: 'БИК-Информ Главный офис / БИК Торговый Дом Главный офис',
            adress: 'ул. Бумажная, д. 9, корп. 1, литер А',
            mail: 'bic@bic-inform.ru',
            site: 'bic-inform.ru',
            phone: '+7 (812) 447-95-55'
        },
        // {
        //     cd: [ 59.905295421119,30.270380973816 ],
        //     title: 'БИК Торговый Дом Главный офис',
        //     adress: 'ул. Бумажная, д. 9, корп. 1, литер А',
        //     mail: 'opt@bic-video.ru',
        //     site: 'bic-video.ru',
        //     phone: '+7 (812) 447-95-57'
        // },
        {
            cd: [ 59.90198268955941,30.274680805557256 ],
            title: 'БИК Торговый Дом офис м. Нарвская',
            adress: 'Старо-Петергофский пр., д. 43/45',
            mail: 'info@bic-video.ru',            
            phone: '+7 (812) 740-11-76'
        },
        {
            cd: [ 60.037009867311,30.331127643585 ],
            title: 'БИК Торговый Дом офис м. Озерки',
            adress: 'ул. Есенина, д. 5, секция 9А',
            mail: 'ozerki@bic-video.ru',            
            phone: '+7 (981) 878-30-28'
        },
        {
            cd: [ 59.930787,30.436817 ],
            title: 'БИК Торговый Дом офис м. Ладожская',
            adress: 'пр. Энергетиков, д. 3, лит. Б, секция 32',
            mail: 'lad@bic-video.ru',            
            phone: '+7 (911) 709-35-29'
        },
        {
            cd: [ 59.903986507823696,30.27436528836057 ],
            title: 'БИК Сервис Центр',
            adress: 'Нарвский пр., д. 14',
            mail: 'service@bic-video.ru',            
            phone: '+7 (812) 747-32-66'
        },
        {
            cd: [ 55.778327266001924,37.69620366864765 ],
            title: 'БИК Московский офис',
            adress: 'ул. Большая Почтовая дом 55/59 строение 1 офис 744',
            mail: 'msk@bic-video.ru',            
            phone: '+7 (495) 645-23-92'
        }
      ];

    var myGeoObjects = [];

    for (var i = 0; i<coords.length; i++) {
    myGeoObjects[i] = new ymaps.Placemark(coords[i].cd, {
        balloonContentHeader: coords[i].title,
        balloonContentBody: coords[i].phone + '<br>' + coords[i].adress + '<br>' + '<a href="mailto:'+ coords[i].mail +'" target="_blank">'+ coords[i].mail + '</a>',
        balloonContentFooter: '<a href="tel:'+ coords[i].phone + '">'+ coords[i].phone + '</a>'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '/img/location_mark.png',
        iconImageSize: [41, 58],
        iconImageOffset: [0, -58]        
    });
    }

    var myClusterer = new ymaps.Clusterer({preset: 'islands#invertedDarkGreenClusterIcons'});
    myClusterer.add(myGeoObjects);
    myMap.geoObjects.add(myClusterer);
   
      
    myMap.behaviors.disable('scrollZoom');
  
});
