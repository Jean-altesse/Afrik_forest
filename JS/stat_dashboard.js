var dropdown = document.querySelector('.dropdown');
var icon = dropdown.querySelector('i');

icon.addEventListener('click', function() {
  dropdown.classList.toggle('open');
});

let options = {
  series: [3, 12, 16],
  chart: {
  height: 390,
  type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: '30%',
        background: 'transparent',
        image: undefined,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        }
      }
    }
  },
  colors: ['#64B83F', '#2C9ECF', '#54D704'],
  labels: ['Employer', 'Tâches', 'Localitées'],
  legend: {
    show: true,
    floating: true,
    fontSize: '16px',
    position: 'left',
    offsetX: 160,
    offsetY: 15,
    labels: {
      useSeriesColors: true,
    },
    markers: {
      size: 0
    },
    formatter: function(seriesName, opts) {
      return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
    },
    itemMargin: {
      vertical: 3
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
          show: false
      }
    }
  }]
};

let chart = new ApexCharts(document.querySelector("#stat"), options);
chart.render();
