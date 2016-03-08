var hauteur = 400;
$(function(){
   $(window).scroll(function () {
      if ($(this).scrollTop() > hauteur) { 
            $('.Sommaire').show();
      } else {
            $('.Sommaire').hide();
      }
   });
 });



$(document).ready( function () {
    // Add return on top button
    $('body').append('<div id="scrollToTop" title="Retour en haut">&nbsp;</div>');
    
    // On button click, let's scroll up to top
    $('#scrollToTop').click( function() {
        $('html,body').animate({scrollTop: 0}, 'slow');
    });
});

$(window).scroll(function() {
    // If on top fade the bouton out, else fade it in
    if ( $(window).scrollTop() == 0 )
        $('#scrollToTop').fadeOut();
    else
        $('#scrollToTop').fadeIn();
});