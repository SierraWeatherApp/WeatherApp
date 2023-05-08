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