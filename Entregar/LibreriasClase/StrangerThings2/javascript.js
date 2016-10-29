$(document).ready (function() { /* Para asegurar la carga total de la página antes de activar las funcionalidades de Javascript */

	/* Pausar / reproducir audio de la web */
	var boton_audio = document.getElementById("boton_audio");
	var audio = document.getElementsByTagName("audio")[0];
	var sonido = true;
    boton_audio.addEventListener("click", function() {
    	if (!sonido) {
	        audio.play();
	        this.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true">';
	        this.className = "button button-circle button-small button-action button-longshadow button-glow";	        
	        sonido = true;
    	} else {
	        audio.pause();
	        this.innerHTML = '<i class="fa fa-volume-down" aria-hidden="true">';
	        this.className = "button button-circle button-small button-caution button-longshadow button-glow";
	        sonido = false;
    	}
    });


	/* Lanza la comparación de imágenes Before-After */
	$('.ba-slider').beforeAfter();


	/* Presenta una notificación emergente en la página */
	humane.log('NETFLIX', {
	    timeout: 5000,
	    clickToClose: true,
	});


	/* Lanza la ventana de aviso de cookies */
	$('.cookie-message').cookieBar({
    	closeButton: '.close'
	});
});