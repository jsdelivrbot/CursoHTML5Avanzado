$(document).ready(function() { 
  var sample = 'digraph migrafo { Euro -> Pesetas [label="166.386"] [color=grey] [style=dashed]; Euro [style=bold]; Pesetas [color=green]; }'; // grafo dirigido

  var options = {
    format: 'svg',
    engine: 'circo'
    // format: 'png-image-element'
  }

  var image = Viz(sample, options);
  var main = document.getElementById('main');

  main.innerHTML = image;        // SVG
 // main.appendChild(image);    // si arriba puse png pongo esta línea, pero como puse svg, pongo la linea anterior

});
