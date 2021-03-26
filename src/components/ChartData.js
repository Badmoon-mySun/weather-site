// export const chartData = {
//     type: "line",
//     data: {
//         labels: [1616670000, 1616673600, 1616677200, 1616680800, 1616684400, 1616688000, 1616691600, 1616695200],
//         datasets: [
//             {
//
//                 label: "Number of Moons",
//                 data: [22, 25, 19, 20, 22, 23, 24, 21],
//                 backgroundColor: "rgb(0, 0, 0, 0)",
//                 // borderColor: "rgb(95, 39, 171)",
//                 borderColor: white,
//                 borderWidth: 4,
//             },
//         ]
//     },
//     // defaults: {
//     //     global: {
//     //         elements: {
//     //             line: {
//     //                 backgroundColor: 'rgb(98,39,177)',
//     //             }
//     //         }
//     //     }
//     // },
//     options: {
//         scales: {
//             yAxes: [{
//                 // display: false,
//                 // mirror: true,
//                 position: 'top',
//                 gridLines: {
//                     display: false,
//                     color: '#5f27ab',
//
//                 }
//             }],
//             xAxes: [{
//                 // display: false,
//                 type: 'time',
//                 distribution: 'series',
//                 time: {
//                     unit: 'hour',
//                     displayFormats: {
//                         quarter: 'hA',
//
//                     },
//                 },
//                 ticks: {
//                     source: 'labels'
//                 },
//                 gridLines: {
//                     display: false,
//                 }
//             }],
//             // gridX: {
//             //     show: true,
//             //     interval: 0,
//             //     fill: 1,
//             //     label: {
//             //         show: true
//             //     }
//             // },
//         },
//
//         layout: {
//             padding: 5,
//         },
//         legend: {
//             display: false,
//         },
//
//         gridLines: {
//             display: false,
//             // drawBorder: false,
//             // drawTicks: false,
//             // drawOnChartArea: false,
//         },
//         ticks: {
//             display: false,
//         }
//     }
// };

// export default chartData;

export function createLineChart(ctx) {
    var gradient = ctx.getContext("2d").createLinearGradient(0, 0, window.innerWidth, 0)
    gradient.addColorStop(0, 'rgb(103, 37, 194)')
    gradient.addColorStop(1, '#bb67cc')
    console.log(window.innerWidth)

    let chartData = {
        type: "line",
        data: {
            labels: [1616670000, 1616673600, 1616677200, 1616680800, 1616684400, 1616688000, 1616691600, 1616695200],
            datasets: [
                {

                    label: "Number of Moons",
                    data: [22, 25, 19, 20, 22, 23, 24, 21],
                    backgroundColor: "rgb(0, 0, 0, 0)",
                    // borderColor: "rgb(95, 39, 171)",
                    borderColor: gradient,
                    borderWidth: 4,

                },
            ]
        },
        // defaults: {
        //     global: {
        //         elements: {
        //             line: {
        //                 backgroundColor: 'rgb(98,39,177)',
        //             }
        //         }
        //     }
        // },
        options: {
            scales: {
                yAxes: [{
                    // display: false,
                    // mirror: true,
                    position: 'top',

                    gridLines: {
                        display: false,
                        color: '#5f27ab',

                    }
                }],
                xAxes: [{
                    // display: false,
                    type: 'time',
                    distribution: 'series',
                    time: {
                        unit: 'hour',
                        displayFormats: {
                            quarter: 'hA',

                        },
                    },
                    ticks: {
                        source: 'labels'
                    },
                    gridLines: {
                        display: false,
                    }
                }],
                // gridX: {
                //     show: true,
                //     interval: 0,
                //     fill: 1,
                //     label: {
                //         show: true
                //     }
                // },
            },

            layout: {
                padding: 5,
            },
            legend: {
                display: false,
            },

            gridLines: {
                display: false,
                // drawBorder: false,
                // drawTicks: false,
                // drawOnChartArea: false,
            },
            ticks: {
                display: false,
            }
        }
    };

    return new Chart(ctx, chartData);
}

export default createLineChart;