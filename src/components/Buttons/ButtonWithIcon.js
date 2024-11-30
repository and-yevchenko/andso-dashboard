export const ButtonWithIcon = {
    create({ className, text, icon, onClick }) {
        const button = document.createElement('button');

        button.type = 'button';
        button.className = className;
        button.innerHTML = `
            ${icon ? icon : ''}
            ${text ? `<span>${text}</span>` : ''}
        `;
        if (onClick) button.onclick = onClick;

        return button;
    },
};
