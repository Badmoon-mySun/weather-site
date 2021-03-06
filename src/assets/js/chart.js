var ctx = document.getElementById('chart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            // backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            // borderWidth: 1
        }]
    },

    options: {
        scales: {
            yAxes: [{
                display: false,
            }],
            xAxes: [{
                display: false,
            }]
        },
        layout: {
            padding: 5,
        },
        legend: {
            display: false,
        },
        gridLines: {
            drawBorder: false,
        },
        ticks: {
            display: false,
        }
    }
});