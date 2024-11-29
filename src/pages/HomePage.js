import { Chart, registerables } from 'chart.js';
import { ChartSalesCategory } from '../components/Charts/BarChart';
import './HomePage.css';
import { ChartSales } from '../components/Charts/LineChart';

export function HomePage() {
    const page = document.createElement('section')
    page.className = 'home-page'
    page.innerHTML = `<div class="home-page-wrap"></div>`

    Chart.register(...registerables)
    page.firstChild.append(ChartSales())
    page.firstChild.append(ChartSales())
    page.firstChild.append(ChartSales())
    page.firstChild.append(ChartSalesCategory())
    page.firstChild.append(ChartSales())
    page.firstChild.append(ChartSales())
    
    return page
}