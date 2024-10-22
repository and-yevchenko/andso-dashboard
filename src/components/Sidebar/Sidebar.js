import { Nav } from '../Nav/Nav';
import { Profile } from '../Profile/Profile';
import './Sidebar.css';

export function Sidebar() {
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';

    sidebar.innerHTML = `
        <button type="button" class="settings"><i class="fa-solid fa-gear"></i><span>Settings</span></button>
    `;

    sidebar.prepend(Nav());
    sidebar.prepend(Profile());

    return sidebar;
}
