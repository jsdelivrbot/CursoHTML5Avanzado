$(document).ready(function() { 
    var sample = 'Entrada->Salida: Función';

    var diagram = Diagram.parse(sample);

    diagram.drawSVG('diagram', {
        theme: 'simple'    // o 'hand'
    });
});
