import Chart from "chart.js";

export function renderLineChart(ctx, data, labels) {
    let gradient = ctx.getContext("2d").createLinearGradient(0, 0, window.innerWidth, 0)
    gradient.addColorStop(0, 'rgb(103, 37, 194)')
    gradient.addColorStop(1, '#bb67cc')

    let chartData = {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {

                    label: "Temperature at this time",
                    data: data,
                    backgroundColor: "rgb(0, 0, 0, 0)",
                    borderColor: gradient,
                    borderWidth: 4,
                },
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false,
                        color: '#5f27ab',

                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                    }
                }],
            },
            layout: {
                padding: 5,
            },
            legend: {
                display: false,
            },

            gridLines: {
                display: false,
            },
            ticks: {
                display: false,
            }
        }
    };

    return new Chart(ctx, chartData);
}

export default renderLineChart;