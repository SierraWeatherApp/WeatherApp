import * as SecureStore from 'expo-secure-store';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';
const ip = '130.229.155.179'
//const device_id = '19238723y7dh3su2as21dfs231a213sd2af'
const device_id = getUDID();
async function getUDID(){
    let thisuuid = uuid.v4();
    let fetchUUID = await SecureStore.getItemAsync('secure_deviceid');
    //if user has already signed up prior
    if (fetchUUID) {
        thisuuid = fetchUUID;
    }
    SecureStore.setItemAsync('secure_deviceid', thisuuid);
    return (thisuuid)
}

export function getIP(){
    return ip;
}
export function getDevice(){
    getUDID()
    return device_id;
}
