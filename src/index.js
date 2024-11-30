import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Sidebar } from './components/Sidebar/Sidebar';
import './style.css';

const app = document.querySelector('#app');

app.append(Header());
app.append(Sidebar());
Main.init()