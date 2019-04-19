import { Dimensions, Platform } from 'react-native';

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