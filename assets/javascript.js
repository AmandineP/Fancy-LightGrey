var hauteur = 400;
$(function(){
   $(window).scroll(function () {
      if ($(this).scrollTop() > hauteur) { 
            $('.Sommaire').fadeIn();
      } else {
            $('.Sommaire').fadeOut();
      }
   });
 });

$(document).ready( function () {
    
    $('body').append('<div id="scrollToTop" title="Retour en haut">&nbsp;</div>');
    
    
    $('#scrollToTop').click( function() {
        $('html,body').animate({scrollTop: 0}, 'slow');
    });
});

$(window).scroll(function() {
    
    if ( $(window).scrollTop() == 0 )
        $('#scrollToTop').fadeOut();
    else
        $('#scrollToTop').fadeIn();
});