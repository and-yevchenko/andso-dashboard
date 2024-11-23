import { ButtonWithIcon } from '../Buttons/ButtonWithIcon';
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

    sidebar.append(
        Profile.create({
            src: '/src/assets/user/emma-roberts.jpg',
            name: 'Emma Roberts',
            position: 'Sales manager',
        }),
    );
    sidebar.append(new Nav(navMenu));
    sidebar.append(
        ButtonWithIcon.create({
            className: 'settings',
            text: 'Settings',
            icon: `<i class="fa-solid fa-gear"></i>`,
        }),
    );

    return sidebar;
}
