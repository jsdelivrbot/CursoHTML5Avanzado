$(document).ready (function() { /* Para asegurar la carga total de la página antes de activar las funcionalidades de Javascript */

	/* Lazy load imágenes */
	$("img").unveil(100);

	/* Lanzar animación shwashIn de las imágenes de los personajes, cuando el usuario haga scroll en la página hasta ellos */
	$(window).scroll(function() {
		$('.imagenPersonaje').each(function() { // Por cada elemento .imagenPersonaje
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) { // Cuando estés 500px antes
				this.style.visibility = "visible"; // Desocultamos las imágenes
				$(this).addClass('magictime swashIn'); // Le añadimos un efecto
			}
		});
	});

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

    /* Lanza el carrusel de imágenes de los personajes de la serie */
    $('.slider').slick({
    	autoplay: true,
    	autoplaySpeed: 2000,
    	lazyLoad: 'ondemand',
    	arrows: true,
    	dots: true,
    	draggable: true,
    	infinite: true,
    	speed: 400,
    	fade: true,
    	adaptiveHeight: true,
	});
	

	/* Lanza la comparación de imágenes Before-After 
	$('.ba-slider').beforeAfter(); */

	/* Lanza la ventana de aviso de cookies */
	$('.cookie-message').cookieBar({
    	closeButton: '.close'
	});



	/* Al llegar a un determinado de la página, lanza un mensaje al usuario */
	var waypoint = new Waypoint({
		element: document.getElementById('nombre_Will'),
		handler: function(direction) {
			/* Presenta una notificación emergente en la página */
			humane.log('¡Pulsa el botón!', {
			    timeout: 5000,
			    clickToClose: true,
			});
			if (direction == 'down') {
				this.destroy();  // Sólo lo detectará una vez
			}
		}
	});


	/* Crea gráfica audiencias */
	var data = {
		labels: ['Game of Thones', 'Stranger Things', 'Mr. Robot', 'Pretty Little Liars', 'The Walking Dead'],
		series: [{ 
			data: [48.0, 43.5, 29.5, 22.1, 21.8]
        }]
	};
	var options = {}
	new Chartist.Bar('.chart', data, options);
	/* fin gráfica */
});




/* Al poner el ratón sobre la imagen de Will, se pone en blanco y negro y se invierte verticalmente */
function cambiarFiltro() {
    var elemento = document.getElementById("imagen_Will");
    elemento.className = "img-responsive inkwell";
    elemento.style.transform = "rotate(180deg)";
}


/* Tras quitar el ratón sobre la imagen de Will, ésta vuelve a su aspecto inicial */
function resetearFiltro() {
    var elemento = document.getElementById("imagen_Will");
    elemento.className = "img-responsive willow";
    elemento.style.transform = "rotate(0deg)";
}



/* Al hacer click sobre el bocadillo de Joyce con las luces, se cambia por un gif con el mensaje de Will */
function pared() {
    var elemento = document.getElementById("pared");
    elemento.src = "images/run.gif";
}



/* Al hacer click sobre el botón de matar al Demogorgon, sale una ventana emergente para elegir un arma */
function msj_demogorgon() {
	swal({
	    title: 'Tirachinas',
	    text: 'Capaz de lanzar proyectiles a larga distancia',
	    imageUrl: 'images/slingshot.png',
	    imageWidth: 340,
	    imageHeight: 340,
	    padding: 20,
	    animation: true,
	    background: '#fff url(images/bosque.png)',
	    showCloseButton: true,
	    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Usar',
	    confirmButtonColor: '#C01A28',
	    showCancelButton: true,
	    cancelButtonText: '<i class="fa fa-bicycle" aria-hidden="true"></i> Prefiero huir',
	}).then(
	    function() {
	    	swal({
	    		title:'¡No ha funcionado!',
	    		text: 'Prueba con Eleven',
	    		background: '#fff url(images/bosque.png)',
	    		showCloseButton: true,
			    confirmButtonText: '<i class="fa fa-check" aria-hidden="true"></i> Ok',
			    confirmButtonColor: '#C01A28',
				showCancelButton: false,
	    	}
	    )},
	    function() {
	    	swal({
	    		title:'¡Cobarde!',
	    		background: '#fff url(images/bosque.png)',
	    		showCloseButton: true,
			    confirmButtonText: ':(',
			    confirmButtonColor: '#C01A28',
				showCancelButton: false,
	    	}
	    )}
	);
}