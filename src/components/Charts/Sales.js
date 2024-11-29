import { Chart } from "chart.js";
import { Block } from "../Block/Block";


export function ChartSales() {
    const chartSales = Block.create({title: "Sales"});
    const canvas = document.createElement('canvas');
    chartSales.append(canvas);

    const chart = new Chart(canvas, {
        type: 'line',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
                label: 'Growth',
                data: [12, 19, 3, 5, 2, 3],
                // borderWidth: 1,
                borderColor: '#9f4636bb',
                // backgroundColor: '#9f4636bb',
            },
        ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
    });
    console.log(chart.data)

    return chartSales
}