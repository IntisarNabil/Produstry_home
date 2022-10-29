$(document).ready(function () {

  $(window).scroll(function () {
      var scrollPosition = $(window).scrollTop();

      // scroll top
      if (scrollPosition > 300) {
          $('#navbar').addClass('fixed');
          $('#scrolltop').removeClass('display_none');
      }
      else {
          $('#navbar').removeClass('fixed');
          $('#scrolltop').addClass('display_none');
      }
  })
  $('#scrolltop .top_arrow_btn').on('click', function () {
      $('html,body').animate({
          scrollTop: '0'
      }, 500)
  })


  // preloader js
  $(window).on('load', function () {
      $('#preloader').fadeOut(500);
  })
  // navbar js 
  $('.handbar .show').on('click', function () {
      $('.menu_bar_show').animate({ right: '0px' })
      $('.hide_everything').animate({ width: '100%' })
      $('#navbar .menu_show ul li a.active').css({ color: 'var(#ffca36;)' })
  })
  $('.handbar .hide').on('click', function () {
      $('.hide_everything').animate({ width: '0%' })
      $('.menu_bar_show').animate({ right: '-250px' })
  })
  $('.nav_btn').on('click', function () {
      $('.menu').toggleClass('showHide')
      $('#navbar .logo').toggleClass('left_side')
  })


  // --> for banner slider
  $('.slider').slick({
      prevArrow:'#banner .left_slider',
      nextArrow:'#banner .right_slider',
      autoplay: true,
  })

  // --> about path slider
  $('#company').on('click', function () {
      $('#about .about_content .content_path_menu .content_path_slider').animate({ margin: '0px 0px 0px 0px' })
  })
  $('#history').on('click', function () {
      $('#about .about_content .content_path_menu .content_path_slider').animate({ margin: '0px 0px 0px 29%' })
  })
  $('#mission').on('click', function () {
      $('#about .about_content .content_path_menu .content_path_slider').animate({ margin: '0px 0px 0px 57%' })
  })
  $('#awards').on('click', function () {
      $('#about .about_content .content_path_menu .content_path_slider').animate({ margin: '0px 0px 0px 84%' })
  })

  // --> achievements counterUP
  $('.counter').counterUp({
      delay: 10,
      time: 2000,
  });

  // --> blog slider
  $('.blog_item_slider').slick({
      slidesToShow: 3,
      arrows:false,
      centerMode: true,
      centerPadding: '0px',
      autoplay: true,
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 1,
                  centerPadding: '100px',
              }
          },
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  centerPadding: '0px',
              }
          }
      ]
  })


  // --> testimonial slider
  $('.testimonial_item_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      asNavFor: '.employee_for_slide',
      autoplay:true,
  });
  $('.employee_for_slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.testimonial_item_slider',
      centerMode: true,
      focusOnSelect: true,
      arrows:false,
      centerPadding: '0px',
      responsive:[
          {
              breakpoint:992,
              settings:{
                  slidesToShow: 3,
              }
          }
      ]
  });


  //  --> brand slider
  $('.brand_slider').slick({
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      centerMode: true,
      centerPadding: '0px',
      arrows:false,
      responsive:[
          {
              breakpoint:992,
              settings:{
                  slidesToShow:3,
              }
          },
          {
              breakpoint:768,
              settings:{
                  slidesToShow:1,
                  centerPadding:'70px',
              }
          },
          {
              breakpoint:576,
              settings:{
                  slidesToShow:1,
                  centerPadding:'26px',
              }
          }
      ]
  })

  //  --> team slider
  $('.team_slider').slick({
      slidesToShow: 3,
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      autoplay: false,
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 1,
                  centerPadding: '150px',
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  centerPadding: '60px',
              }
          },
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  centerPadding: '0px',
              }
          }
      ]
  })


})
// --> about section js
function show(v1, v2, v3, v4) {
  $(v1).removeClass('display-none')
  $(v2).addClass('display-none')
  $(v3).addClass('display-none')
  $(v4).addClass('display-none')
}
// --> blog sidebar news
function news(v1, v2, v3) {
  $(v1).addClass('active')
  $(v2).removeClass('active')
  $(v3).removeClass('active')
}
// venobox activator
new VenoBox();
