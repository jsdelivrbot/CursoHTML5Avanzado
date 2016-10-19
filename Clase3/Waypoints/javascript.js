
$(document).ready(function() { 
  var waypoint = new Waypoint({
    // Elemento oal que quiero q llegue el usuario para realizar una determinada acción
    element: document.getElementById('meta'),
    // Función disparada
    handler: function(direction) {
      alert('¡Has llegado!');
      // La alerta sale cuando el elemento objetivo "meta" alcanza la parte superior de la ventana
    }
  });
});  
