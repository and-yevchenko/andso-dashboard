import { Chart } from 'chart.js';
import { Box } from '../Box/Box';

export function BarChart(data) {
    const canvas = document.createElement('canvas');

    const chart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: [
                ...new Set(
                    data.years.map((year) => Object.keys(year.values)).flat(),
                ),
            ],
            datasets: data.years.map((year) => ({
                label: year.label,
                data: Object.values(year.values),
                borderWidth: 1,
            })),
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });

    const barChart = Box.create({
        title: data.title,
        content: canvas,
    });
    return barChart;
}
