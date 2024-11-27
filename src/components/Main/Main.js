import { stateNav } from "../Nav/Nav";

const one = document.createElement('div')
one.textContent = '000000000000000'
const two = document.createElement('div')
two.textContent = '111111111111111'
const three = document.createElement('div')
three.textContent = '222222222222222'
const four = document.createElement('div')
four.textContent = '333333333333333'

export const Main = {
    main: null,
    pages: [
        one,
        two,
        three,
        four
    ],

    create() {
        this.main = document.createElement('main');
        this.main.className = 'main';

        this.pages.forEach((page, index) => {
            page.style.display = index + 1 === stateNav.getState() ? 'block' : 'none';
            this.main.appendChild(page);
        });

        return this.main;
    },

    renderPage(index) {
        this.pages.forEach((page, idx) => {
            page.style.display = idx + 1 === index ? 'block' : 'none';
        });
    }
}
