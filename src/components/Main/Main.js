import { HomePage } from "../../pages/HomePage";
import { MessagesPage } from "../../pages/MessagesPage";
import { TasksPage } from "../../pages/TasksPage";
import { TeamPage } from "../../pages/TeamPage";
import { stateNav } from "../Nav/Nav";

export const Main = {
    main: null,
    pages: [
        HomePage(),
        TasksPage(),
        MessagesPage(),
        TeamPage()
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
