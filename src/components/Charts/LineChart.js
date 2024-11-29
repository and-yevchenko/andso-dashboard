import { Chart } from 'chart.js';
import { Box } from '../Block/Box';

export function LineChart() {
    const canvas = document.createElement('canvas');

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
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
    console.log(chart.data);

    const lineChart = Box.create({ title: 'Sales', content: canvas });
    return lineChart;
}
