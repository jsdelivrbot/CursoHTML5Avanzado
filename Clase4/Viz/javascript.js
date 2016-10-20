$(document).ready(function() { 
  var sample = 'digraph migrafo { Euro -> Pesetas [label="166.386"]; }'; // grafo dirigido

  var options = {
    format: 'svg'
    // format: 'png-image-element'
  }

  var image = Viz(sample, options);
  var main = document.getElementById('main');

  main.innerHTML = image;        // SVG
 // main.appendChild(image);    // si arriba puse png pongo esta línea, pero como puse svg, pongo la linea anterior

});
