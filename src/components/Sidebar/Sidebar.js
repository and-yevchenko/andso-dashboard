import './Sidebar.css';

export function Sidebar() {
    const sidebar = document.createElement('aside');
    sidebar.classList.add('sidebar');

    sidebar.innerHTML = `
        <button type="button" class="profile">
            <img class="profile-img" src="/src/assets/user/emma-roberts.jpg" alt="Emma Roberts" />
            <div class="profile-info">
                <span class="profile-name">Emma Roberts</span>
                <span class="profile-position">Sales manager</span>
            </div>
        </button>

        <nav class="nav">
            <button type="button" class="nav-item"><i class="fa-solid fa-house"></i><span>Home</span></button>
            <button type="button" class="nav-item"><i class="fa-solid fa-list-check"></i><span>Tasks</span></button>
            <button type="button" class="nav-item"><i class="fa-solid fa-message"></i><span>Messages</span></button>
            <button type="button" class="nav-item"><i class="fa-solid fa-user-group"></i></i><span>Team</span></button>
        </nav>
        
        <button type="button" class="settings"><i class="fa-solid fa-gear"></i><span>Settings</span></button>
    `;

    return sidebar;
}
