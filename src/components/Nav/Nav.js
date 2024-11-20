import { createState } from '../../utils/createState';
import './Nav.css';

export const stateNav = createState(0);

export function Nav(navMenu) {
    const nav = document.createElement('nav');
    nav.className = 'nav';
    nav.innerHTML = `
        ${navMenu
            .map((navItem) => {
                return `<button type="button" class="nav-item">${navItem.icon}<span>${navItem.name}</span></button>`;
            })
            .join('')}
    `;

    const navItems = Array.from(nav.querySelectorAll('.nav-item'));
    navItems[0].classList.add('_active');

    /* onClick */
    if (navItems.length > 0) {
        navItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                stateNav.setState(index);
                updateActiveClass(navItems, stateNav.getState());
            });
        });
    }

    function updateActiveClass(items, activeIndex) {
        items.forEach((item, index) => {
            if (index === activeIndex) {
                item.classList.add('_active');
            } else {
                item.classList.remove('_active');
            }
        });
    };

    return nav;
}
