$(document).ready(function() { 



  var data = {
    labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'],
    series: [{ 
               data: [2, 4, 6, 8, 10, 12]
            }]
  };

  var options = {}

  new Chartist.Line('.chart', data, options);
});
