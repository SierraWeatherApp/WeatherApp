export function apiToFront(preferences, look, gender){
    return {
        'Sandals': preferences.shoes_sandals,
        'Boots': preferences.shoes_boots,
        'Sneakers': preferences.shoes_sneakers,
        'Rain Boots': preferences.shoes_rain,
        'Pants': preferences.pants_pants,
        'Snow-pants': preferences.pants_snow_pants,
        'Shorts': preferences.pants_shorts,
        'Long Sleeved': preferences.shirt_long_sleeve,
        'T-Shirt': preferences.shirt_t_shirt,
        'Hoodie': preferences.shirt_hoodie,
        'Winter Jacket': preferences.jacket_winter,
        'Light Jacket': preferences.jacket_light,
        'Cap': preferences.head_cap,
        'Beanie': preferences.head_beanie,
        'Umbrella': preferences.umbrella_true,
        'Glasses':0,
        'Skin': look,
        'Gender': 'male'
    }
}
export function frontToApi(name){
    const names = {
        'Sandals': 'shoes_sandals',
        'Boots': 'shoes_boots',
        'Sneakers': 'shoes_sneakers',
        'Rain Boots': 'shoes_rain',
        'Pants': 'pants_pants',
        'Snow-pants': 'pants_snow_pants',
        'Shorts': 'pants_shorts',
        'Long Sleeved': 'shirt_long_sleeve',
        'T-Shirt': 'shirt_t_shirt',
        'Hoodie': 'shirt_hoodie',
        'Winter Jacket': 'jacket_winter',
        'Light Jacket': 'jacket_light',
        'Cap': 'head_cap',
        'Beanie': 'head_beanie',
        'Umbrella': 'umbrella_true',
    }
    return names[name]
}