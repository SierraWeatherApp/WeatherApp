import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';

const winter = [require('../assets/jacket/winter/v1.png')]
const pants = [require('../assets/pants/pants/v1.png'),require('../assets/pants/pants/v2.png')]
const hoodie = [require('../assets/shirt/hoodie/v1.png'), require('../assets/shirt/hoodie/v2.png'),
require('../assets/shirt/hoodie/v1.png'), require('../assets/shirt/hoodie/v2.png'),
require('../assets/shirt/hoodie/v1.png'), require('../assets/shirt/hoodie/v2.png')
]
const longSleeved = [require('../assets/shirt/long/v1.png')]
const boots = [require('../assets/shoes/boots/v1.png')]
const sneakers = [require('../assets/shoes/sneakers/v1.png')]
const rain = [require('../assets/shoes/rain/v1.png')]
const sandals = [require('../assets/shoes/sandals/v1.png')]
const umbrella = [require('../assets/accessories/umbrella/v1.png')]
const shorts = [require('../assets/pants/shorts/v1.png')]
const light = [require('../assets/jacket/light/v1.png')]
export function getWinterJackets(){
    return winter;
}
function getlongSleeved(){
    return longSleeved;
}
function getPants(){
    return pants;
}
function getHoodie(){
    return hoodie;
}
function getBoots(){
    return boots;
}
function getSneakers(){
    return sneakers;
}
function getRainBoots(){
    return rain;
}
function getSandals(){
    return sandals;
}
function getUmbrella(){
    return umbrella;
}
function getShorts(){
    return shorts;
}
function getLightJacket(){
    return light;
}

export function getClothing(JSONOfClothing){
    const clothing = useSelector(state => state.clothing)
    var hat;
    var shirt;
    var jacket;
    var pants;
    var shoes;
    var umbrella;
    if(JSONOfClothing.hat === 'beanie'){

    }
    else if(JSONOfClothing.hat === 'cap'){
  
    }
    else{
      hat = require('../assets/empty.png')
    }
    if(JSONOfClothing.shirt === 'long-sleeved'){
      shirt = getlongSleeved()[clothing['Long Sleeved']]
    }
    else if(JSONOfClothing.shirt === 'hoodie'){
      shirt = getHoodie()[clothing['Hoodie']]
    }
    else{
  
    }
    if(JSONOfClothing.jacket === 'winter-jacket'){
      jacket = getWinterJackets()[clothing['Winter Jacket']]
    }
    else if(JSONOfClothing.jacket === 'light-jacket'){
      jacket = getLightJacket()[clothing['Light Jacket']]
    }
    else{
      jacket = require('../assets/empty.png')
    }
    if(JSONOfClothing.pants === 'pants'){
      pants = getPants()[clothing['Pants']]
    }
    else if(JSONOfClothing.pants === 'shorts'){
      pants = getShorts()[clothing['Shorts']]
    }
    else{
  
    }
    if(JSONOfClothing.shoes === 'boots'){
      shoes = getBoots()[clothing['Boots']]
    }
    else if(JSONOfClothing.shoes === 'sandals'){
      shoes = getSandals()[clothing['Sandals']]
    }
    else if(JSONOfClothing.shoes === 'rain'){
      shoes = getRainBoots()[clothing['Rain Boots']]
    }
    else{
      shoes = getSneakers()[clothing['Sneakers']]
    }
    if(JSONOfClothing.umbrella === 'true'){
      umbrella = getUmbrella()[clothing['Umbrella']]
    }
    else{
      umbrella = require('../assets/empty.png')
    }
    return {
        hat: hat,
        shirt: shirt,
        jacket: jacket,
        pants: pants,
        shoes: shoes,
        umbrella: umbrella,
    }
}

export function getClothingArray(clothingType){
    if(clothingType === 'Hat'){
        return {
        }
    }
    else if(clothingType === 'Shirt'){
        return {
            'Long Sleeved': longSleeved,
            'Hoodie': hoodie,
            'T-Shirt': hoodie,
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
            'Snow-pants': pants,
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
        }
    }
}