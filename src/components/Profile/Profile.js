import './Profile.css';

export const Profile = {
    create({ src, alt, name, position, className }) {
        const profile = document.createElement('button');
        profile.className = 'profile';
        profile.classList.add(className);

        profile.innerHTML = `
            <img class="profile-img" src=${src} alt=${alt} />
        `;

        if (name || position) {
            const profileInfo = document.createElement('div');
            profileInfo.className = 'profile-info';

            profileInfo.innerHTML = `
            ${name ? `<span class="profile-name">${name}</span>` : ''}
            ${position ? `<span class="profile-position">${position}</span>` : ''}
            `;

            profile.append(profileInfo);
        }

        return profile;
    },
};
