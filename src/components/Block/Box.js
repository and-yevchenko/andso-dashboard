import './Box.css';

export const Box = {
    create({ title, content, className }) {
        const block = document.createElement('article');

        block.className = 'box';
        if (className) block.classList.add(className)
        if (title) block.innerHTML = `<h4>${title}</h4>`;
        block.append(content)

        return block;
    },
};