import { createState } from '../../utils/createState';
import { ButtonWithIcon } from '../Buttons/ButtonWithIcon';
import './Nav.css';

const stateNav = createState(1)

export class Navigation {
    constructor (navMenu) {
        this.navMenu = navMenu
        this.state = stateNav
        this.navItems = []
        this.nav = this.createNav()
        this.init()
    }

    createNav() {
        const nav = document.createElement('nav');
        nav.className = 'nav';
        return nav
    }

    init() {
        this.navItems = this.navMenu.map((navItem, index) => {
            return ButtonWithIcon.create({
                className: 'nav-item',
                text: navItem.name,
                icon: navItem.icon,
                onClick: () => this.handleClick(index + 1),
            });
        });
    
        this.nav.append(...this.navItems);
    
        this.navItems[0].classList.add('_active');
    }
    
    handleClick(activeIndex) {
        this.state.setState(activeIndex);
        this.updateActiveClass(activeIndex);
    }

    updateActiveClass(activeIndex) {
        this.navItems.forEach((item, index) => {
            item.classList.toggle('_active', index + 1 === activeIndex);
        });
    }

    getElement() {
        return this.nav
    }
}
