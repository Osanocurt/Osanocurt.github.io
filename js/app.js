console.log('winning');
$(document).ready(function() {
  $(function() {
    $('body').on('click', 'a.scrollable', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 2000, 'easeInOutExpo');
      event.preventDefault();
    });

  });
  $('.navbar-collapse ul li a').click(function(){
    $('.navbar-collapse').collapse('hide');
  });
  $(function() {
    $('.js-nav a, .js-connect').click(function(e) {
      e.preventDefault();
      $('body, html').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 750);
    });
  });
});
