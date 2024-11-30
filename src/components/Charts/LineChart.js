import { Chart } from 'chart.js';
import { Box } from '../Box/Box';

export function LineChart(data) {
    const canvas = document.createElement('canvas');
    const value = Object.values(data.values);

    const chart = new Chart(canvas, {
        type: 'line',
        data: {
            labels: Object.keys(data.values).slice(-6),
            datasets: [
                {
                    label: data.label,
                    data: Object.values(data.values).slice(-6),
                    borderColor:
                        value[0] < value[value.length - 1]
                            ? '#008f00be'
                            : '#c20a0acc',
                    tension: 0.2,
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

    const lineChart = Box.create({ title: data.title, content: canvas });
    return lineChart;
}
