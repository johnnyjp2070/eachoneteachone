// JavaScript Document

(function ($) {
   $('#toggle').click(function () {
      $(this).toggleClass('active');
      $('.header-bottom').toggleClass('open');
   });

   $('.parent-li a i').on('click', function () {
      $('.parent-li .drop-down').toggleClass('opened');
   });

})(jQuery);