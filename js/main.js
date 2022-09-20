$(document).ready(function(){
  // header dropdown toggle
  $('.js-header-toggle').click(function(){
    $('body').toggleClass('is-show-dropdown lock');
  });
    $('.js-accordion-item').click(function(){
    $('.accordion__item').toggleClass('active');
  });
})();

 var onloadCallback = function() {
    alert("grecaptcha is ready!");
 };
