
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
    const activeTab = document.querySelector(".nav-link.active");
    const underline = document.querySelector(".nav-underline");

    function setUnderlinePosition(tab) {
        const tabRect = tab.getBoundingClientRect();
        const containerRect = tab.parentElement.getBoundingClientRect();
        underline.style.width = tabRect.width + "px";
        underline.style.left = (tabRect.left - containerRect.left) + "px";
    }

    function initializeUnderline() {
        setUnderlinePosition(activeTab);
    }

    initializeUnderline();

    const tabs = document.querySelectorAll(".nav-link");
    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            setUnderlinePosition(tab);
        });
    });

    // Ajuste para garantir que a função seja chamada após um breve atraso
    window.addEventListener('load', function() {
        setTimeout(initializeUnderline, 100); // 100ms de atraso
    });
});


 
  })(window.jQuery);


