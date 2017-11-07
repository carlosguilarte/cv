'use strict'

$(function(){


	$('.item .foto').on('click', function(event){
		event.preventDefault();
		var img = $(this).data('imagen');
		$('.modalPortafolio').removeClass('todocuba eldiariohabla islalocal envioscaracol mejortusalud sms');
		$('.modalPortafolio').addClass(img);
		$('.modalPortafolio').css({'display':'block'});
		$('.modal-bg').css({'display':'block'});
	});	


	$('.modal-bg, .cerrar').on('click', function(){

		$('.modalPortafolio').css({'display':'none'});
		$('.modal-bg').css({'display':'none'});

		$('.modalPortafolio').removeClass('todocuba eldiariohabla islalocal envioscaracol mejortusalud sms');

	});

	// evento scroll del bton subir
    $('.scrollTop').on('click', function() {
         $("html, body").animate({ scrollTop: 0 }, 600);
         return false;
    });

    $(document).on("scroll", function() {
	    //sacamos el desplazamiento actual de la página
	    var desplazamientoActual = $(document).scrollTop();
	    //accedemos al control de "ir arriba"
	    if (desplazamientoActual > 200) {
	        jQuery('.scrollTop').css({ 'right': '2%' });
	    }
	    //controlo si debo ocultar el botón
	    if (desplazamientoActual < 100) {
	        jQuery('.scrollTop').css({ 'right': '-6%' });
	    }
	});


});