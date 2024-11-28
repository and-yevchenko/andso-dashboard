import './Block.css';

export const Block = {
    create({ title, className }) {
        const block = document.createElement('article');

        block.className = 'block';
        if (className) block.classList.add(className)
        if (title) block.innerHTML = `<h4>${title}</h4>`;

        return block;
    },
};