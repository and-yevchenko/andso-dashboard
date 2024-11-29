import { Chart } from 'chart.js';
import { Box } from '../Block/Box';

export function CircleChart() {
    const canvas = document.createElement('canvas');

    const chart = new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green'],
            datasets: [
                {
                    label: 'Growth',
                    data: [12, 19, 3, 5],
                    hoverOffset: 5,
                },
            ],
        },
    });
    console.log(chart.data);

    const circleChart = Box.create({ title: 'Sales', content: canvas });
    return circleChart;
}
