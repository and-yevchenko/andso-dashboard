import { Chart, registerables } from 'chart.js';
import './HomePage.css';
import { LineChart } from '../components/Charts/LineChart';
import { BarChart } from '../components/Charts/BarChart';
import { CircleChart } from '../components/Charts/CircleChart';
import { PolarAreaChart } from '../components/Charts/PolarAreaChart';
import { getStatistics } from '../services/getStatistics';

export async function HomePage() {
    const page = document.createElement('section')
    page.className = 'home-page'
    page.innerHTML = `<div class="home-page-wrap"></div>`
    page.firstChild.innerHTML = `<p class="home-page-loading">Loading...</p>`

    const { data, error } = await getStatistics()

    if (error) {
        page.firstChild.innerHTML = `<p class="home-page-error">${error}</p>`
    } else {
        page.firstChild.innerHTML = ``
        console.log(data)

        Chart.register(...registerables)
        page.firstChild.append(LineChart())
        page.firstChild.append(LineChart())
        page.firstChild.append(LineChart())
        page.firstChild.append(BarChart())
        page.firstChild.append(CircleChart())
        page.firstChild.append(PolarAreaChart())
        page.firstChild.append(CircleChart())
    }

    return page
}