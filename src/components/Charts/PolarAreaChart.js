import { Chart } from 'chart.js';
import { Box } from '../Box/Box';

export function PolarAreaChart() {
    const canvas = document.createElement('canvas');

    const chart = new Chart(canvas, {
        type: 'polarArea',
        data: {
            labels: ['Europe', 'Asia', 'Africa', 'North America', 'South America'],
            datasets: [
                {
                    label: 'Growth',
                    data: [12, 19, 3, 5, 6],
                    hoverOffset: 5,
                },
            ],
        },
    });

    const polarAreaChart = Box.create({ title: 'Sales', content: canvas });
    return polarAreaChart;
}
