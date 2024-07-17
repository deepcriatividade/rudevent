
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    document.addEventListener("DOMContentLoaded", function() {
      const track = document.querySelector(".logo-carousel-track");
      const slides = Array.from(track.children);
      const slideWidth = slides[0].getBoundingClientRect().width;
      
      function setSlidePosition(slide, index) {
        slide.style.left = slideWidth * index + "px";
      }
    
      slides.forEach(setSlidePosition);
    
      function moveToSlide(track, currentSlide, targetSlide) {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
      }
    
      function moveSlide() {
        const currentSlide = track.querySelector(".logo-carousel-slide");
        const nextSlide = currentSlide.nextElementSibling;
        moveToSlide(track, currentSlide, nextSlide);
        track.append(currentSlide);
      }
    
      setInterval(moveSlide, 3000);
    });
    
  
  })(window.jQuery);


