(function($) { 
  $(function() { 
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.dropmenu_list').toggle();

      $('.dropmenu_list').not($(this).siblings()).hide();
      e.stopPropagation();
    });

    $('html').click(function() {
      $('.dropmenu_list').hide();
    });

    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
  
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); 
})(jQuery); 
