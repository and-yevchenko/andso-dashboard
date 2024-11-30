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
    // console.log(data.find((el) => el.title === 'Sales'))

    if (error) {
        page.innerHTML = `<p class="home-page-error">Error: ${error}</p>`;
    } else {
        page.innerHTML = `<div class="home-page-wrap"></div>`;
        page.firstChild.innerHTML = ``;

        Chart.register(...registerables);
        page.firstChild.append(
            LineChart(data.find((el) => el.title === 'Sales')),
        );
        page.firstChild.append(
            LineChart(data.find((el) => el.title === 'Offer')),
        );
        page.firstChild.append(
            LineChart(data.find((el) => el.title === 'Demand')),
        );
        page.firstChild.append(
            BarChart(data.find((el) => el.title === 'Sales by category')),
        );
        page.firstChild.append(CircleChart(data.find((el) => el.title === 'Profit')));
        page.firstChild.append(PolarAreaChart());
        page.firstChild.append(CircleChart(data.find((el) => el.title === 'Profit / Loss')));
    }

    return page;
}
