$(document).ready(function() {
  $('.editor').trumbowyg({
  });

  $('#trumbowyg').trumbowyg('html'); // Obtienes el HTML generado
  
  $('.editor').trumbowyg({
  lang: 'es', // Idioma (es.min.js incluido)
  btns: [
          ['bold', 'italic', 'underline', 'strikethrough'],
          ['superscript', 'subscript'],
          ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
          ['unorderedList', 'orderedList'],
          ['link', 'insertImage'],
          ['horizontalRule', 'removeformat'],
          ['viewHTML'],
          ['fullscreen']
        ],
});


});
