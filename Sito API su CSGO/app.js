const skinsData = [
    {
        "id": "skin-65604",
        "name": "Desert Eagle | Urban DDPAT",
        "description": "As expensive as it is powerful, the Desert Eagle is an iconic pistol that is difficult to master but surprisingly accurate at long range. It has been painted using a Digital Disruptive Pattern (DDPAT) hydrographic.\n\nBy the time you're close enough to notice the pixels it's already too late",
        "weapon": {
            "id": "weapon_deagle",
            "name": "Desert Eagle"
        },
        "category": {
            "id": "csgo_inventory_weapon_category_pistols",
            "name": "Pistols"
        },
        "pattern": {
            "id": "hy_ddpat_urb",
            "name": "Urban DDPAT"
        },
        "min_float": 0.06,
        "max_float": 0.8,
        "rarity": {
            "id": "rarity_uncommon_weapon",
            "name": "Industrial Grade",
        },
        "stattrak": false,
        "souvenir": true,
        "paint_index": "17",
        "wears": [
            {"id": "SFUI_InvTooltip_Wear_Amount_0", "name": "Factory New"},
            {"id": "SFUI_InvTooltip_Wear_Amount_1", "name": "Minimal Wear"},
            {"id": "SFUI_InvTooltip_Wear_Amount_2", "name": "Field-Tested"},
            {"id": "SFUI_InvTooltip_Wear_Amount_3", "name": "Well-Worn"},
            {"id": "SFUI_InvTooltip_Wear_Amount_4", "name": "Battle-Scarred"}
        ],
        "collections": [
            {
                "id": "collection-set-overpass",
                "name": "The Overpass Collection",
                "image": "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/set_icons/set_overpass_png.png"
            }
        ],
        "crates": [
            {
                "id": "crate-4028",
                "name": "ESL One Cologne 2014 Overpass Souvenir Package",
                "image": "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_esl14_promo_de_overpass_png.png"
            }
        ],
        "team": {
            "id": "both",
            "name": "Both Teams"
        },
        "image": "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_deagle_hy_ddpat_urb_light_png.png"
    }
];



const skinsContainer = document.getElementById('skins');

skinsData.forEach(skin => {
    const skinElement = document.createElement('div');
    skinElement.classList.add('skin');
    skinElement.innerHTML = `
        <h2>${skin.name}</h2>
        <img src="${skin.image}" alt="${skin.name}">
        <p>${skin.description}</p>
        <p><strong>Weapon:</strong> ${skin.weapon.name}</p>
        <p><strong>Category:</strong> ${skin.category.name}</p>
        <p><strong>Pattern:</strong> ${skin.pattern.name}</p>
        <p><strong>Rarity:</strong> <span style="color: ${skin.rarity.color};">${skin.rarity.name}</span></p>
        <p><strong>Souvenir:</strong> ${skin.souvenir ? 'Yes' : 'No'}</p>
    `;
    skinsContainer.appendChild(skinElement);
});