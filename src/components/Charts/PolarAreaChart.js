import { Chart } from 'chart.js';
import { Box } from '../Box/Box';

export function PolarAreaChart(data) {
    const canvas = document.createElement('canvas');

    const chart = new Chart(canvas, {
        type: 'polarArea',
        data: {
            labels: Object.keys(data.values),
            datasets: [
                {
                    label: '',
                    data: Object.values(data.values),
                    hoverOffset: 5,
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            }
        },
    });

    const polarAreaChart = Box.create({ title: data.title, content: canvas });
    return polarAreaChart;
}
