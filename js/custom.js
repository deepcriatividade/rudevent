
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

    // LOGO SLIDE
    document.addEventListener("DOMContentLoaded", function() {
      const track = document.querySelector(".logo-carousel-track");
      const slides = Array.from(track.children);
      
      // Cloning slides to make the animation seamless
      slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
      });
    
      let currentPosition = 0;
      
      function moveSlides() {
        currentPosition -= 1; // Adjust the value to control the speed
        if (currentPosition <= -track.scrollWidth / 2) {
          currentPosition = 0;
        }
        track.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(moveSlides);
      }
      
      moveSlides();
    });
    
  
       
  
  })(window.jQuery);


