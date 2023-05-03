import * as React from "react";

const winter = [require('../assets/jacket/winter/v1.png')]
const pants = [require('../assets/pants/pants/v1.png')]
const hoodie = [require('../assets/shirt/hoodie/v1.png'), require('../assets/shirt/hoodie/v2.png')]
const longSleeved = [require('../assets/shirt/long-sleeved/v1.png')]
const boots = [require('../assets/shoes/boots/v1.png')]
const sneakers = [require('../assets/shoes/sneakers/v1.png')]
const rain = [require('../assets/shoes/rain/v1.png')]
const sandals = [require('../assets/shoes/sandals/v1.png')]
const umbrella = [require('../assets/accessories/umbrella/v1.png')]
export function getWinterJackets(){
    return winter;
}
export function getlongSleeved(){
    return longSleeved;
}
export function getPants(){
    return pants;
}
export function getHoodie(){
    return hoodie;
}
export function getBoots(){
    return boots;
}
export function getSneakers(){
    return sneakers;
}
export function getRainBoots(){
    return rain;
}
export function getSandals(){
    return sandals;
}
export function getUmbrella(){
    return umbrella;
}