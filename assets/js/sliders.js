const homeSwiper = new Swiper(".swiperHome",{
    loop : true,
    grabCursor : true,
    navigation : {
        nextEl : ".next",
        prevEl : ".prev",
    },
    keyboard : {
        enabled : true,
    },
    autoplay : {
        delay : 2500,
        disableOnInteraction : false,
    },
});



const onGoingProjects = new Swiper(".ongoingProjects", {
    effect: "coverflow",
    loop : true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".projectPagination",
        dynamicBullets: true,
      },
})



var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });



  var ourTeam = new Swiper(".ourTeam", {
    slidesPerView:1,
    loop : true,
    spaceBetween: 10,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
      475: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });


