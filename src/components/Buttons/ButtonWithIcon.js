
export function ButtonWithIcon({ className, text, icon, onClick, id }) {
    const button = document.createElement('button');

    button.className = className;
    button.innerHTML = `${icon}<span>${text}</span>`
    button.type = "button"
    button.onclick = onClick
    button.dataset.id = id

    return button
}