import { Chart, registerables } from 'chart.js';
import './HomePage.css';
import { LineChart } from '../components/Charts/LineChart';
import { BarChart } from '../components/Charts/BarChart';
import { CircleChart } from '../components/Charts/CircleChart';
import { PolarAreaChart } from '../components/Charts/PolarAreaChart';

export function HomePage() {
    const page = document.createElement('section')
    page.className = 'home-page'
    page.innerHTML = `<div class="home-page-wrap"></div>`

    Chart.register(...registerables)
    page.firstChild.append(LineChart())
    page.firstChild.append(LineChart())
    page.firstChild.append(LineChart())
    page.firstChild.append(BarChart())
    page.firstChild.append(CircleChart())
    page.firstChild.append(PolarAreaChart())
    page.firstChild.append(CircleChart())
    
    return page
}