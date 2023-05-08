import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';

const winter = []
const light = []
const pants = [require('../assets/female/pants/pants/v1.png')]
const shorts = []
const snowpants = []
const hoodie = []
const longSleeved = []
const tshirt = [require('../assets/female/shirt/tshirt/v1.png')]
const boots = []
const sneakers = [require('../assets/female/shoes/sneakers/v1.png')]
const rain = []
const sandals = []
const skin = [require('../assets/female-body/skin/v1.png')]
const umbrella = [require('../assets/accessories/umbrella/v1.png')]
const glasses = []
const beanie = []
const cap = []
export function getClothing(JSONOfClothing){
    const clothing = useSelector(state => state.clothing)
    let hat;
    let shirt;
    let jacket;
    let pantsTemp;
    let shoes;
    let umbrellaTemp;
    let skinTemp = skin[clothing['Skin']]
    if(JSONOfClothing.hat === 'head_beanie'){
        hat = beanie[clothing['Beanie']]
    }
    else if(JSONOfClothing.hat === 'head_cap'){
        hat = cap[clothing['Cap']]
    }
    else{
      hat = require('../assets/empty.png')
    }
    if(JSONOfClothing.shirt === 'shirt_long_sleeve'){
      shirt = longSleeved[clothing['Long Sleeved']]
    }
    else if(JSONOfClothing.shirt === 'shirt_hoodie'){
      shirt = hoodie[clothing['Hoodie']]
    }
    else{
        shirt = tshirt[clothing['T-Shirt']]
    }
    if(JSONOfClothing.jacket === 'jacket_winter'){
      jacket = winter[clothing['Winter Jacket']]
    }
    else if(JSONOfClothing.jacket === 'jacket_light'){
      jacket = light[clothing['Light Jacket']]
    }
    else{
      jacket = require('../assets/empty.png')
    }
    if(JSONOfClothing.pants === 'pants_pants'){
        pantsTemp = pants[clothing['Pants']]
    }
    else if(JSONOfClothing.pants === 'pants_shorts'){
        pantsTemp = shorts[clothing['Shorts']]
    }
    else{
        pantsTemp = snowpants[clothing['Snow-pants']]
    }
    if(JSONOfClothing.shoes === 'shoes_boots'){
      shoes = boots[clothing['Boots']]
    }
    else if(JSONOfClothing.shoes === 'shoes_sandals'){
      shoes = sandals[clothing['Sandals']]
    }
    else if(JSONOfClothing.shoes === 'shoes_rain'){
      shoes = rain[clothing['Rain Boots']]
    }
    else{
      shoes = sneakers[clothing['Sneakers']]
    }
    if(JSONOfClothing.umbrella === 'umbrella_True'){
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