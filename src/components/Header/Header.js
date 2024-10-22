import './Header.css';
import logoIcon from '../../assets/logo.svg';

export function Header() {
    const header = document.createElement('header');
    header.className = 'header';

    header.innerHTML = `
        <div class="logo-section">
            <a href="/" class="logo-link">
                <img src=${logoIcon} class="logo-img" alt="Logo" width="100px"/>
            </a>
        </div> 
        <div class="user-section">
            <button type="button" class="notifications"><i class="fa-regular fa-bell"></i></button>
            <button type="button" class="user"><img src="/src/assets/user/emma-roberts.jpg" alt="Emma Roberts" /></button>
        </div>
    `;

    return header;
}
