document.addEventListener('DOMContentLoaded', () => {
    displaySkins(data); // Display all skins initially

    // Add event listener to the search button
    document.getElementById('searchButton').addEventListener('onclick', searchSkins);
});

function displaySkins(skins) {
    const skinsContainer = document.getElementById('skins');
    skinsContainer.innerHTML = ''; // Clear previous skins
    skins.forEach(skin => {
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
}

function searchSkins() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredSkins = data.filter(skin => {
        const skinNameLower = skin.name.toLowerCase();
        return skinNameLower.includes(searchInput);
    });
    displaySkins(filteredSkins);
}