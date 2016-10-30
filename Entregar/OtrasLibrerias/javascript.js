$(document).ready (function() { /* Para asegurar la carga total de la página antes de activar las funcionalidades de Javascript */
	/* Lanza librería SVG.js para manipular una imagen SVG */
	if (SVG.supported) {
		// Creación de la imagen SVG 
    	var draw = SVG('logotipoTWD')

    	// Creación de la imagen que hará de textura (relleno)
    	var image = draw.image('images/texture.png', 1000, 240.75)
    	var image2 = draw.image('images/texture.png', 1000, 240.75)
    	//image.size(1000, 240.75)

    	// Creación del texto
        var text = draw.text(function(add) {
			add.tspan('THE').fill('#fff').newLine().dx(50)	

		})
		text.font({
        	family: 'Tungsten',
        	size: 16,
        	anchor: 'middle',
        	leading: '1pt'
        })

        var text2 = draw.text(function(add) {
			add.tspan('WALKING DEAD').fill('#fff').newLine().dx(135)
		})
		text2.font({
        	family: 'TungstenBlack',
        	size: 60,
        	anchor: 'middle',
        	leading: '1pt',
        })
    
    	// Crear máscara texto + imagen
    	image.clipWith(text)
    	image2.clipWith(text2)

    	// Animación SVG
		text.animate().dmove(-80,0).reverse(true)
		text2.animate().dmove(80,0).reverse(true)
	
   	}
   	else {
        alert('La versión de tu navegador es antigua y no soporta archivos SVG. Por favor, actualiza tu navegador para poder visualizarlo correctamente.');
    }
    /* fin SVG.js */



    /* Lanza librería VIVUS para animar el logotipo de AMC */
    new Vivus( 'logotipoAMC', {
    	type: 'sync',
    	duration: 65,
    	animTimingFunction: Vivus.EASE_IN,
    });



    /* Lanza librería Typed.js */
    $(".typed").typed({
        strings: ["Rick Grimes", "Daryl Dixon", "Carl Grimes", "Glenn Rhee", "Maggie Greene", "Michonne", "Carol Peletier", "Abraham Ford"],
		typeSpeed: 0,
		startDelay: 500,
        backDelay: 2000,
        loop: true
      });

	$('.container').chardinJs('start')

});