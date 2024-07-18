
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
    
    // FAQ
    const accordionHeaders = document.querySelectorAll('.accordion-item-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const currentlyActiveAccordionHeader = document.querySelector('.accordion-item-header.active');
        if(currentlyActiveAccordionHeader && currentlyActiveAccordionHeader !== header) {
            currentlyActiveAccordionHeader.classList.toggle('active');
            currentlyActiveAccordionHeader.nextElementSibling.style.maxHeight = 0;
        }

        header.classList.toggle('active');
        const accordionBody = header.nextElementSibling;
        if(header.classList.contains('active')) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
        } else {
            accordionBody.style.maxHeight = 0;
        }
    });
});

  // ABAS
  document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const navUnderline = document.querySelector(".nav-underline");

    function updateUnderline() {
        const activeLink = document.querySelector(".nav-link.active");
        const activeLinkRect = activeLink.getBoundingClientRect();
        const parentRect = activeLink.parentElement.getBoundingClientRect();

        navUnderline.style.width = `${activeLinkRect.width}px`;
        navUnderline.style.left = `${activeLinkRect.left - parentRect.left}px`;
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
            updateUnderline();
        });
    });

    updateUnderline();
});

  
  })(window.jQuery);


