import './Header.css';
import logoIcon from '../../assets/logo.svg';
import { Profile } from '../Profile/Profile';
import { ButtonWithIcon } from '../Buttons/ButtonWithIcon';

export function Header() {
    const header = document.createElement('header');
    header.className = 'header';

    const logoSection = document.createElement('div');
    logoSection.className = 'logo-section';
    logoSection.innerHTML = `
        <a href="/" class="logo-link">
            <img src=${logoIcon} class="logo-img" alt="Logo" width="100px"/>
        </a>
    `;

    const userSection = document.createElement('div');
    userSection.className = 'user-section';
    const handleClick = (e) => {
        e.currentTarget.classList.toggle('_active')
    };
    userSection.append(
        ButtonWithIcon.create({
            className: 'notifications',
            icon: `<i class="fa-regular fa-bell">`,
            onClick: handleClick,
        }),
    );
    userSection.append(
        Profile.create({
            src: '/assets/user/emma-roberts.jpg',
            alt: 'Emma-Roberts',
        }),
    );

    header.append(logoSection);
    header.append(userSection);

    return header;
}
