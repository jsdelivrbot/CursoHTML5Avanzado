$(document).ready(function() {
    
    $('#input-tags').selectize({
    plugins: ['remove_button', 
              'drag_drop'],

    });
    
    $('#input-tags').selectize({
      delimiter: ' ',
      persist: false,
      maxItems: 4,    
        
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

