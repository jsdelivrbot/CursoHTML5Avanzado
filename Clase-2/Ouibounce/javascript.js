$(document).ready(function() {
  ouibounce(document.getElementById('modal-card'), {
    aggressive: true,			// borra la cookie viewedOuibounceModal
    timer: 5						// espera (evita falsos positivos)
  });
});
