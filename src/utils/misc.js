import { Dimensions, Platform, AsyncStorage } from 'react-native';
//import {  } from '@react-native-community/async-storage' ;

export const getOrientation = (value) => {
    return Dimensions.get('window').height > value ? "portrait" : "landscape";
}

export const setOrientationListener = (callback) => {
    return Dimensions.addEventListener('change', callback);
}

export const removeOrientationListener = () => {
    return Dimensions.removeEventListener('change');
}

export const getPlatform = () => {
    if (Platform.OS === 'ios'){
        return 'ios'
    } else {
        return 'android'
    }
}

export const getTokens = (callback) => {
    AsyncStorage.multiGet([
        "@payavalApp@token",
        "@payavalApp@refreshtoken",
        "@payavalApp@expiretoken",
        "@payavalApp@uid",
    ]).then(value => {
        callback(value);
    });
}

export const setTokens = (values, callback) => {
    const dateNow = new Date();
    const expiration = dateNow.getTime() + (3600*1000);

    AsyncStorage.multiSet([
        ["@payavalApp@token",values.token.toString()],
        ["@payavalApp@refreshtoken",values.refToken.toString()],
        ["@payavalApp@expiretoken",expiration.toString()],
        ["@payavalApp@uid",values.uid.toString()],
    ]).then(response => {
        callback();
    });
}