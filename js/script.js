let pageSlider = new Swiper ('.page',{
   wrapperClass: "page__wrapper",
   slideClass: "page__screen",

   direction: 'vertical',
   sliderPerView: 'auto',

   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },

   mousewheel: {
      sensitivity: 1,
   },

   watchOverflow: true,
   speed: 800,
   observer: true,
   observeParents: true,
   observeSlideChildren: true,

   pagination: {
      el: '.page__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: "page__bullet",
      bulletActiveClass: "page__bullet_active",
   },
   on:{
      init: function(swiper){
         let pagination = document.querySelector('.page__pagination');
         
         let line = document.querySelector('.marker');
         let allSlides = document.querySelector('.page__screen');

         let all = document.documentElement;
         let mainHeight = all.clientHeight;
         if (mainHeight<900){
            pagination.style.right = 5 + "%";
         }
         let c = pagination.getBoundingClientRect();
         line.style.top = c.top + "px";
         line.style.left = c.left + "px";
         line.style.width = c.width + "px";
         line.style.height = c.height + "px";
         if(swiper.activeIndex==0){
            pagination.style.bottom = 0 + "%";
         }else{pagination.style.bottom = 50 + "%"};
      },
      resize: function(swiper){
         let pagination = document.querySelector('.page__pagination');
         
         let line = document.querySelector('.marker');
         let all = document.documentElement;
         let mainHeight = all.clientHeight;
         if (mainHeight<900){
            pagination.style.right = 5 + "%";
         }
         let c = pagination.getBoundingClientRect();
         line.style.top = c.top + "px";
         line.style.left = c.left + "px";
         line.style.width = c.width + "px";
         line.style.height = c.height + "px";
      },
      slideChange: function(swiper){
         let pagination = document.querySelector('.page__pagination');
         if(swiper.activeIndex==0){
            pagination.style.bottom = 0 + "%";
            pagination.style.top = "auto";
         }else{pagination.style.bottom = "auto";
         pagination.style.top = 0 + "%";};
         let c = pagination.getBoundingClientRect();
         let line = document.querySelector('.marker');
         line.style.top = c.top + "px";
         line.style.left = c.left + "px";
         line.style.width = c.width + "px";
         line.style.height = c.height + "px";
         let marker = document.querySelector('.marker-item');
         let a = 4 + 100/swiper.slides.length*swiper.activeIndex+"%";
         marker.style.top=a;
      },
      click: function(swiper){
         let refs = document.querySelectorAll('.main__menu-items');
         let footerRefs = document.querySelectorAll('.footer__menu-items')
         for (i=0; i<refs.length; i++){
            let num = i;
            refs[i].addEventListener('click', function(event){
               swiper.slideTo(num);
            })
         };
         for (i=0; i<footerRefs.length; i++){
            let num = i;
            footerRefs[i].addEventListener('click', function(event){
               swiper.slideTo(num);
            })
         }
      }
   }
})
