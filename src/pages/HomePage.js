import { Chart, registerables } from 'chart.js';
import { ChartSalesCategory } from '../components/Charts/ChartSalesCategory';
import './HomePage.css';

export function HomePage() {
    const page = document.createElement('section')
    page.className = 'home-page'

    Chart.register(...registerables)
    page.append(ChartSalesCategory())
    
    return page
}