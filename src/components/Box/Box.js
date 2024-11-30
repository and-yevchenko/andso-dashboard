import './Box.css';

export const Box = {
    create({ title, content, className }) {
        const box = document.createElement('article');

        box.className = 'box';
        if (className) box.classList.add(className);
        if (title) box.innerHTML = `<h4>${title}</h4>`;
        box.append(content);

        return box;
    },
};
