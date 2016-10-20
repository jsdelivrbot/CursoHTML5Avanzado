$(document).ready(function() { 
    // var sample = 'Entrada->Salida: Función';
    var sample = 'Title: Esto es un título';

    var diagram = Diagram.parse(sample);

    diagram.drawSVG('diagram', {
        theme: 'hand'    // o 'simple'
    });
});
