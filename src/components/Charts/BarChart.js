import { Chart } from 'chart.js';
import { Box } from '../Block/Box';

export function BarChart() {
    const canvas = document.createElement('canvas');

    const chart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                    label: '2024',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1,
                },
                {
                    label: '2023',
                    data: [16, 10, 2, 1, 7, 9],
                    borderWidth: 1,
                },
                {
                    label: '2022',
                    data: [16, 10, 2, 1, 7, 9],
                    borderWidth: 1,
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

    const barChart = Box.create({ title: 'Sales by category', content: canvas });
    return barChart;
}
