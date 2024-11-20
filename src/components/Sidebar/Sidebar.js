import { Nav } from '../Nav/Nav';
import { Profile } from '../Profile/Profile';
import './Sidebar.css';

const navMenu = [
    {
        name: 'Home',
        icon: `<i class="fa-solid fa-house"></i>`,
    },
    {
        name: 'Tasks',
        icon: `<i class="fa-solid fa-list-check"></i>`,
    },
    {
        name: 'Messages',
        icon: `<i class="fa-solid fa-message"></i>`,
    },
    {
        name: 'Team',
        icon: `<i class="fa-solid fa-user-group"></i>`,
    },
];

export function Sidebar() {
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';

    sidebar.innerHTML = `
        <button type="button" class="settings"><i class="fa-solid fa-gear"></i><span>Settings</span></button>
    `;

    sidebar.prepend(new Nav(navMenu));
    sidebar.prepend(new Profile());

    return sidebar;
}
