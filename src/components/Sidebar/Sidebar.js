import './Sidebar.css';

export function Sidebar() {
    const sidebar = document.createElement('aside');
    header.classList.add('sidebar');

    sidebar.innerHTML = `
        <div class="profile">
            <img src="/src/assets/user/emma-roberts.jpg" alt="Emma Roberts" />
            <div>
                <span class="profile-name">Emma Roberts</span>
                <span class="profile-position">Sales manager</span>
            </div>
        </div>

        <nav class="nav">
            <ul class="nav-list">
                <li class="nav-item"><i class="fa-solid fa-house"></i><span>Home</span></li>
                <li class="nav-item"><i class="fa-solid fa-list-check"></i><span>Tasks</span></li>
                <li class="nav-item"><i class="fa-solid fa-message"></i><span>Messages</span></li>
                <li class="nav-item"><i class="fa-solid fa-users"></i><span>Team</span></li>
            </ul>
        </nav>
        
        <div class="settings"><i class="fa-solid fa-gear"></i><span>Settings</span></div>
    `;



    return sidebar;
}
