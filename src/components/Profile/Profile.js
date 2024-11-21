import './Profile.css';

export function Profile() {
    const profile = document.createElement('button');
    profile.className = 'profile';

    profile.innerHTML = `
        <img class="profile-img" src="/src/assets/user/emma-roberts.jpg" alt="Emma Roberts" />
        <div class="profile-info">
            <span class="profile-name">Emma Roberts</span>
            <span class="profile-position">Sales manager</span>
        </div>
    `;

    return profile;
}