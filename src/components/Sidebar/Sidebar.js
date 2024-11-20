import { Nav } from '../Nav/Nav';
import { Profile } from '../Profile/Profile';
import './Sidebar.css';

export function Sidebar() {
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';

    const nav = new Nav()
    const profile = new Profile()

    sidebar.innerHTML = `
        ${nav.outerHTML}
        ${profile.outerHTML}
        <button type="button" class="settings"><i class="fa-solid fa-gear"></i><span>Settings</span></button>
    `;

    return sidebar;
}
