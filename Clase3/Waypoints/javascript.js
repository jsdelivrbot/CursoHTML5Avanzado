
$(document).ready(function() { 
  var waypoint = new Waypoint({
    // Elemento oal que quiero q llegue el usuario para realizar una determinada acción
    element: document.getElementById('meta'),
    // Función disparada
    handler: function(direction) {
      alert('¡Has llegado!');
    }
  });
});  
