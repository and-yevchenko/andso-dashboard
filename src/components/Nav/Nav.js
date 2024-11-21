import { createState } from '../../utils/createState';
import { ButtonWithIcon } from '../Buttons/ButtonWithIcon';
import './Nav.css';

export const stateNav = createState(0);

export function Nav(navMenu) {
    const nav = document.createElement('nav');
    nav.className = 'nav';
    
    const handleClick = (e) => {
        console.log(e.currentTarget.dataset.id)
        stateNav.setState(Number(e.currentTarget.dataset.id));
        updateActiveClass(stateNav.getState())
    }

    navMenu
        .map((navItem, index) => nav.append(new ButtonWithIcon({className: 'nav-item', text: navItem.name, icon: navItem.icon, onClick: handleClick, id: index})))

    const navItems = Array.from(nav.querySelectorAll('.nav-item'));
    navItems[0].classList.add('_active');

    function updateActiveClass(activeIndex) {
        console.log(activeIndex)
        navItems.forEach((item, index) => {
            if (index === activeIndex) {
                item.classList.add('_active');
                console.log(item, index)
            } else {
                item.classList.remove('_active');
                console.log(item, index)
            }
        });
    };

    return nav;
}
