import { Nav } from '../Nav/Nav';
import './Sidebar.css';

export function Sidebar() {
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';

    sidebar.innerHTML = `
        <button type="button" class="profile">
            <img class="profile-img" src="/src/assets/user/emma-roberts.jpg" alt="Emma Roberts" />
            <div class="profile-info">
                <span class="profile-name">Emma Roberts</span>
                <span class="profile-position">Sales manager</span>
            </div>
        </button>
        
        <button type="button" class="settings"><i class="fa-solid fa-gear"></i><span>Settings</span></button>
    `;

    sidebar.appendChild(Nav());
    return sidebar;
}
