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


});