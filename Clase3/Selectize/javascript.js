$(document).ready(function() {
    $('#input-tags').selectize({
      delimiter: ' ',
      persist: false,
      create: function(input) {
        return { 
          value: input,
          text: input 
        }
      }
  });



function viewTags() {
  tags = document.getElementById('input-tags');
  console.log(tags.value.split(' '));
}

});
