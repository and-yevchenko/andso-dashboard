import { Chart, registerables } from 'chart.js';
import './HomePage.css';
import { LineChart } from '../components/Charts/LineChart';
import { BarChart } from '../components/Charts/BarChart';
import { CircleChart } from '../components/Charts/CircleChart';
import { PolarAreaChart } from '../components/Charts/PolarAreaChart';
import { getStatistics } from '../services/getStatistics';

export async function HomePage() {
    const page = document.createElement('section');
    page.className = 'home-page';
    page.innerHTML = `<p class="home-page-loading">Loading...</p>`;

    const { data, error } = await getStatistics();

    if (error) {
        page.innerHTML = `<p class="home-page-error">Error: ${error}</p>`;
    } else {
        const wrapper = document.createElement('div');
        wrapper.className = 'home-page-wrap';

        Chart.register(...registerables);

        const chartsConfig = [
            { chart: LineChart, title: 'Sales' },
            { chart: PolarAreaChart, title: 'Continents' },
            { chart: BarChart, title: 'Sales by category' },
            { chart: CircleChart, title: 'Profit' },
            { chart: LineChart, title: 'Offer' },
            { chart: LineChart, title: 'Demand' }
        ];

        chartsConfig.forEach(({ chart, title }) => {
            const chartData = data.find(el => el.title === title);
            if (chartData) {
                wrapper.append(chart(chartData));
            }
        });

        page.innerHTML = '';
        page.append(wrapper);
    }

    return page;
}
