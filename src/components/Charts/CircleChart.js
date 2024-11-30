import { Chart } from 'chart.js';
import { Box } from '../Box/Box';

export function CircleChart(data) {
    const canvas = document.createElement('canvas');

    const chart = new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: Object.keys(data.values),
            datasets: [
                {
                    label: data.label,
                    data: Object.values(data.values),
                    hoverOffset: 5,
                },
            ],
        },
    });

    const circleChart = Box.create({ title: data.title, content: canvas });
    return circleChart;
}
