import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import './style.css';

const app = document.querySelector('#app');

app.appendChild(Header());
app.appendChild(Sidebar());
