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
                    borderColor: '#9f4636bb',
                    tension: 0.5
                },
            ],
        },
        options: { //TODO
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });

    const lineChart = Box.create({ title: 'Sales', content: canvas });
    return lineChart;
}
