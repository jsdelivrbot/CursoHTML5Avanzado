$(document).ready(function() { 
  impress().init();

});

/* En vez de usar el document ready, usamos esto que es sin jQuery: */
windows.addEventListener('DOMContentLoaded', function() {
    impress().init();
};
