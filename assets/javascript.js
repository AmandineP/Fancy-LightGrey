//Fonction pour faire apparaître le menu//
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

//Fonction pour faire remonter la page en haut//
$(document).ready( function () {
    
    $('body').append('<div id="scrollToTop" title="Retour en haut" style="background: #373d48;"></div>');
    
    
    $('#scrollToTop').click( function() {
        $('html,body').animate({scrollTop: 0}, 'slow');
    });

//Fonction pour changer le nom a sa selection//
    $('.trick-select select').on('change',function(elt){
      var value = $('option:selected', this).text()
      parent = $(this).parent('.trick-select')
      $('.selectBox-label',parent).html(value)
    })
});

//Fonction pour faire apparaître le bouton//
$(window).scroll(function() {
    
    if ( $(window).scrollTop() == 0 )
        $('#scrollToTop').fadeOut();
    else
        $('#scrollToTop').fadeIn();
});