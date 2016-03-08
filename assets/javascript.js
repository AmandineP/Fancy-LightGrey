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
