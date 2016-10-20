$(document).ready(function() { 
  var data = {
    labels: ['USA', 'Spain', 'UK', 'Japan', 'China', 'France'],
    series: [{ data: [5, 4, 6, 11, 10, -5]},
             { data: [2, 0, 18, 2, 7, -9]},
             { data: [3, 10, 4, 6, 6, 0]},
            ]
  };

  var options = {}

  new Chartist.Line('.chart', data, options);
});
