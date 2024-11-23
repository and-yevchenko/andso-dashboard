import './Profile.css';

export const Profile = {
    create({ src, name, position }) {
        const profile = document.createElement('button');
        profile.className = 'profile';

        profile.innerHTML = `
            <img class="profile-img" src=${src} alt=${name} />
            <div class="profile-info">
                <span class="profile-name">${name}</span>
                <span class="profile-position">${position}</span>
            </div>
        `;

        return profile;
    },
};
