import { ButtonWithIcon } from '../Buttons/ButtonWithIcon';
import { Navigation } from '../Nav/Nav';
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
            src: '/user/emma-roberts.jpg',
            alt: 'Emma Roberts',
            name: 'Emma Roberts',
            position: 'Sales manager',
            className: 'profile__sidebar',
        }),
    );
    sidebar.append(new Navigation(navMenu).getElement());
    sidebar.append(
        ButtonWithIcon.create({
            className: 'settings',
            text: 'Settings',
            icon: `<i class="fa-solid fa-gear"></i>`,
        }),
    );

    return sidebar;
}
