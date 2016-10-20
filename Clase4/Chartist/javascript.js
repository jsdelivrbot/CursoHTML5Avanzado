$(document).ready(function() { 
  var data = {
    labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'],
    series: [{ 
               data: [5, 4, 6, 11, 10, -5]
            }]
  };

  var options = {}

  new Chartist.Line('.chart', data, options);
});
