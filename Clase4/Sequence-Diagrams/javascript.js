$(document).ready(function() { 
    var sample = 'A->B: Mensaje';

    var diagram = Diagram.parse(sample);

    diagram.drawSVG('diagram', {
        theme: 'simple'    // o 'hand'
    });
});
