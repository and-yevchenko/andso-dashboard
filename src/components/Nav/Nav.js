import { ButtonWithIcon } from '../Buttons/ButtonWithIcon';
import './Nav.css';

export function Nav(navMenu) {
    const nav = document.createElement('nav');
    nav.className = 'nav';

    const navItems = navMenu.map((navItem, index) => {
        return ButtonWithIcon.create({
            className: 'nav-item',
            text: navItem.name,
            icon: navItem.icon,
            onClick: () => handleClick(index + 1),
        });
    });

    nav.append(...navItems);

    navItems[0].classList.add('_active');

    function handleClick(activeIndex) {
        updateActiveClass(activeIndex);
    }

    function updateActiveClass(activeIndex) {
        navItems.forEach((item, index) => {
            item.classList.toggle('_active', index + 1 === activeIndex);
        });
    }

    return nav;
}
