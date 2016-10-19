
$(document).ready(function() { 
  var waypoint = new Waypoint({
    // Elemento objetivo
    element: document.getElementById('meta'),
    // Función disparada
    handler: function(direction) {
      alert('¡Has llegado!');
    }
  });
});  
