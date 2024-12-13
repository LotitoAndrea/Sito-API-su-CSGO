document.addEventListener('DOMContentLoaded', () => {
    data.forEach(skin => {
    const skinsContainer = document.getElementById('skins');

    const skinElement = document.createElement('div');
    skinElement.className = 'skin';

    const skinTitle = document.createElement('h2');
    skinTitle.innerHTML = skin.name;
    skinElement.appendChild(skinTitle);

    const skinImage = document.createElement('img');
    skinImage.setAttribute('src', skin.image);
    skinImage.setAttribute('alt', skin.name);
    skinElement.appendChild(skinImage);

    const skinDescription = document.createElement('p');
    skinDescription.innerHTML = skin.description;
    skinElement.appendChild(skinDescription);

    const skinWeapon = document.createElement('p');
    skinWeapon.innerHTML = `<strong>Weapon:</strong> ${skin.weapon.name}`;
    skinElement.appendChild(skinWeapon);

    const skinCategory = document.createElement('p');
    skinCategory.innerHTML = `<strong>Category:</strong> ${skin.category.name}`;
    skinElement.appendChild(skinCategory);

    const skinPattern = document.createElement('p');
    skinPattern.innerHTML = `<strong>Pattern:</strong> ${skin.pattern.name}`;
    skinElement.appendChild(skinPattern);

    const skinRarity = document.createElement('p');
    skinRarity.innerHTML = `<strong>Rarity:</strong> <span style="color: ${skin.rarity.color};">${skin.rarity.name}</span>`;
    skinElement.appendChild(skinRarity);

    const skinSouvenir = document.createElement('p');
    skinSouvenir.innerHTML = `<strong>Souvenir:</strong> ${skin.souvenir ? 'Yes' : 'No'}`;
    skinElement.appendChild(skinSouvenir);

        skinsContainer.appendChild(skinElement);
    });
});