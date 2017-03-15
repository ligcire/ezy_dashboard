$(function () {

  'use strict';

  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */


  //-------------
  //- PIE CHART -
  //-------------
  // Get context with jQuery - using jQuery's .get() method.
  var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
  var pieChart = new Chart(pieChartCanvas);
  var PieData = [
    {
      value: 1,
      color: "#323232",
      highlight: "#191919",
      label: "Canceled"
    },
    {
      value: 2,
      color: "#00C0EF",
      highlight: "#00A7D0",
      label: "Not Accepted"
    },
    {
      value: 4,
      color: "#0073b7",
      highlight: "#0067a4",
      label: "Accepted"
    },
    {
      value: 2,
      color: "#F39C12",
      highlight: "#DB8B0B",
      label: "Currently Running"
    },
    {
      value: 1,
      color: "#00A65A",
      highlight: "#008D4C",
      label: "Completed"
    }
  ];
  var pieOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,
    //String - The colour of each segment stroke
    segmentStrokeColor: "#fff",
    //Number - The width of each segment stroke
    segmentStrokeWidth: 1,
    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts
    //Number - Amount of animation steps
    animationSteps: 80,
    //String - Animation easing effect
    animationEasing: "easeOutQuad",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    //Boolean - whether to make the chart responsive to window resizing
    responsive: true,
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: false,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
    //String - A tooltip template
    tooltipTemplate: "<%=value %> <%=label%> Shipments"
  };
  //Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  pieChart.Doughnut(PieData, pieOptions);
  $('a[href="#tab_1-1"]').on('shown.bs.tab', function(){
    pieChart.Doughnut(PieData, pieOptions);
  })
  //-----------------
  //- END PIE CHART -
  //-----------------

  //-------------
  //- PIE CHART -
  //-------------
  // Get context with jQuery - using jQuery's .get() method.
  $('a[href="#tab_2-1"]').on('shown.bs.tab', function(){
    var pieChartMonthCanvas = $("#pieChartMonth").get(0).getContext("2d");
    var pieChartMonth = new Chart(pieChartMonthCanvas);
    var PieData = [
      {
        value: 11,
        color: "#323232",
        highlight: "#191919",
        label: "Canceled"
      },
      {
        value: 12,
        color: "#00C0EF",
        highlight: "#00A7D0",
        label: "Not Accepted"
      },
      {
        value: 14,
        color: "#0073b7",
        highlight: "#0067a4",
        label: "Accepted"
      },
      {
        value: 12,
        color: "#F39C12",
        highlight: "#DB8B0B",
        label: "Currently Running"
      },
      {
        value: 11,
        color: "#00A65A",
        highlight: "#008D4C",
        label: "Completed"
      }
    ];
    var pieOptions = {
      //Boolean - Whether we should show a stroke on each segment
      segmentShowStroke: true,
      //String - The colour of each segment stroke
      segmentStrokeColor: "#fff",
      //Number - The width of each segment stroke
      segmentStrokeWidth: 1,
      //Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout: 50, // This is 0 for Pie charts
      //Number - Amount of animation steps
      animationSteps: 80,
      //String - Animation easing effect
      animationEasing: "easeOutQuad",
      //Boolean - Whether we animate the rotation of the Doughnut
      animateRotate: true,
      //Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale: false,
      //Boolean - whether to make the chart responsive to window resizing
      responsive: true,
      // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
      maintainAspectRatio: false,
      //String - A legend template
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
      //String - A tooltip template
      tooltipTemplate: "<%=value %> <%=label%> Shipments"
    };
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    pieChartMonth.Doughnut(PieData, pieOptions);
  })
  //-----------------
  //- END PIE CHART -
  //-----------------

  // Week Picker
  $('#selectWeek-btn').daterangepicker(
    {
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'This Week': [moment().startOf('week'), moment().endOf('week')],
      },
      startDate: moment().startOf('days'),
      endDate: moment().endOf('days')
    },
    function (start, end) {
      $('#selectWeek-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }
  );

  // Month Picker
  $('#selectMonth-btn').daterangepicker(
    {
      ranges: {
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    },
    function (start, end) {
      $('#selectMonth-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }
  );

  //-------------
  //- BAR CHART -
  //-------------
  $('a[href="#tab_3-1"]').on('shown.bs.tab', function(){
    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas);
    var barChartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: "With EzyHaul",
          fillColor: "rgba(0, 166, 90, 0.5)",
          strokeColor: "rgba(0, 166, 90, 7)",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(60, 141, 188, 1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(60, 141, 188, 1)",
          data: [280, 480, 400, 190, 860, 270, 900, 480, 400, 190, 860, 270]
        }
      ]
    };
    var barChartOptions = {
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero: true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: true,
      //String - Colour of the grid lines
      scaleGridLineColor: "rgba(0,0,0,0.1)",
      //Number - Width of the grid lines
      scaleGridLineWidth: 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,
      //Boolean - If there is a stroke on each bar
      barShowStroke: true,
      //Number - Pixel width of the bar stroke
      barStrokeWidth: 2,
      //Number - Spacing between each of the X value sets
      barValueSpacing: 5,
      //Number - Spacing between data sets within X values
      barDatasetSpacing: 1,
      //String - A legend template
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
      //Boolean - whether to make the chart responsive
      responsive: true,
      maintainAspectRatio: true
    };

    barChartOptions.datasetFill = false;
    barChart.Bar(barChartData, barChartOptions);
  });
});
