$(document).ready(function() { 
  var tabla = document.getElementById('tablesort');
  new Tablesort(tabla);
  
  table th.sort-up::after {
  content:"⏷";
}
});
