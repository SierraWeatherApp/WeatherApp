import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';

const winter = [require('../assets/jacket/winter/v1.png')]
const light = [require('../assets/jacket/light/v1.png')]
const pants = [require('../assets/pants/pants/v1.png'),require('../assets/pants/pants/v2.png')]
const shorts = [require('../assets/pants/shorts/v1.png')]
const snowpants = []
const hoodie = [require('../assets/shirt/hoodie/v1.png'), require('../assets/shirt/hoodie/v2.png'),
require('../assets/shirt/hoodie/v1.png'), require('../assets/shirt/hoodie/v2.png'),
require('../assets/shirt/hoodie/v1.png'), require('../assets/shirt/hoodie/v2.png')
]
const longSleeved = [require('../assets/shirt/long/v1.png')]
const tshirt = []
const boots = [require('../assets/shoes/boots/v1.png')]
const sneakers = [require('../assets/shoes/sneakers/v1.png')]
const rain = [require('../assets/shoes/rain/v1.png')]
const sandals = [require('../assets/shoes/sandals/v1.png')]
const skin = [require('../assets/male-body/skin/v1.png'), require('../assets/male-body/skin/v2.png'),
            require('../assets/male-body/skin/v3.png'), require('../assets/male-body/skin/v4.png')]
const umbrella = [require('../assets/accessories/umbrella/v1.png')]
const glasses = []
const beanie = []
const cap = []
export function getClothing(JSONOfClothing){
    const clothing = useSelector(state => state.clothing)
    var hat;
    var shirt;
    var jacket;
    var pantsTemp;
    var shoes;
    var umbrellaTemp;
    var skinTemp = skin[clothing['Skin']]
    if(JSONOfClothing.hat === 'beanie'){
        hat = beanie[clothing['Beanie']]
    }
    else if(JSONOfClothing.hat === 'cap'){
        hat = cap[clothing['Cap']]
    }
    else{
      hat = require('../assets/empty.png')
    }
    if(JSONOfClothing.shirt === 'long-sleeved'){
      shirt = longSleeved[clothing['Long Sleeved']]
    }
    else if(JSONOfClothing.shirt === 'hoodie'){
      shirt = hoodie[clothing['Hoodie']]
    }
    else{
        shirt = tshirt[clothing['T-Shirt']]
    }
    if(JSONOfClothing.jacket === 'winter-jacket'){
      jacket = winter[clothing['Winter Jacket']]
    }
    else if(JSONOfClothing.jacket === 'light-jacket'){
      jacket = light[clothing['Light Jacket']]
    }
    else{
      jacket = require('../assets/empty.png')
    }
    if(JSONOfClothing.pants === 'pants'){
        pantsTemp = pants[clothing['Pants']]
    }
    else if(JSONOfClothing.pants === 'shorts'){
        pantsTemp = shorts[clothing['Shorts']]
    }
    else{
        pantsTemp = snowpants[clothing['Snow-pants']]
    }
    if(JSONOfClothing.shoes === 'boots'){
      shoes = boots[clothing['Boots']]
    }
    else if(JSONOfClothing.shoes === 'sandals'){
      shoes = sandals[clothing['Sandals']]
    }
    else if(JSONOfClothing.shoes === 'rain'){
      shoes = rain[clothing['Rain Boots']]
    }
    else{
      shoes = sneakers[clothing['Sneakers']]
    }
    if(JSONOfClothing.umbrella === 'true'){
      umbrellaTemp = umbrella[clothing['Umbrella']]
    }
    else{
      umbrellaTemp = require('../assets/empty.png')
    }
    return {
        hat: hat,
        shirt: shirt,
        jacket: jacket,
        pants: pantsTemp,
        shoes: shoes,
        umbrella: umbrellaTemp,
        skin: skinTemp
    }
}
export function getClothingArray(clothingType){
    if(clothingType === 'Hat'){
        return {
            'Beanie': beanie,
            'Cap': cap,
        }
    }
    else if(clothingType === 'Shirt'){
        return {
            'Long Sleeved': longSleeved,
            'Hoodie': hoodie,
            'T-Shirt': tshirt,
        }
    }
    else if(clothingType === 'Jacket'){
        return {
            'Winter Jacket': winter,
            'Light Jacket': light,
        }
    }
    else if (clothingType === 'Pants'){
        return {
            'Pants': pants,
            'Shorts': shorts,
            'Snow-pants': snowpants,
        }
    }
    else if(clothingType === 'Shoes'){
        return {
            'Rain Boots': rain,
            'Sneakers': sneakers,
            'Boots': boots,
            'Sandals': sandals,
        }
    }
    else if(clothingType === 'Body'){
        return {
            'Umbrella': umbrella,
            'Skin': skin,
            'Glasses': glasses,
        }
    }
}