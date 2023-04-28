import React, { useState, useEffect, useRef } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
const ip = '130.229.155.179'
//const ip = '192.168.0.160'
const device_id = '19238723y7dh3su2as21dfs231a213sd2af'
export function getIP(){
    return ip;
}
export function getDevice(){
    return (device_id);
};
