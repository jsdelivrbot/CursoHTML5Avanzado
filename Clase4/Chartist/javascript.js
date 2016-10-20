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
  new Chartist.Bar('.chart2', data, options);
  
  
  
  //////////////
  
  var data2 = {
    series: [30, 15, 5, 50]
  }

  var options2 = {
     donut: true,
     donutWidth: 70,
     startAngle: 90,
     total: 300
  }

  new Chartist.Pie('.chart3', data2, options2);
  });
