function mensaje() {
  swal({
    title: 'Powerup',
    text: 'Aumenta el tamaño de Mario Bros',
    imageUrl: 'seta.png',
    imageWidth: 340,
    imageHeight: 340,
    padding: 20,
    animation: false,
    
    
    showCloseButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> ¡Bien!',
    confirmButtonColor: '#1db75a',
    showCancelButton: true,
    cancelButtonText: '<i class="fa fa-thumbs-down"></i> :(',
  }).then(
    function() { swal('¡Aceptado!') },
    function() { swal('¡Cancelado!') }
  );
  
  
  });
}


/*function mensaje() {
  swal({
    title: 'Título',
    text: 'Mensaje de texto',
    type: 'success',
    showCloseButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> ¡Bien!',
    confirmButtonColor: '#1db75a',
    showCancelButton: true,
    cancelButtonText: '<i class="fa fa-thumbs-down"></i> :(',
  }).then(
    function() { swal('¡Aceptado!') },
    function() { swal('¡Cancelado!') }
  );
}
*/

/*function mensaje() {
  swal({
    title: 'Título',
    text: 'Mensaje de texto',
    html: '<p>Suscríbete al <strong>blog</strong>.</p>',
    type: 'success',
    timer: 3000,
  });
}*/


