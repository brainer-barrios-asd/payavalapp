import {
    REGISTER_USER,
    SIGN_USER,
    AUTO_SIGN_IN,
} from '../types';

import axios from 'axios';


export function signIn (data){
    const request = axios({
        method: 'POST',
        url:'https://jsonplaceholder.typicode.com/posts',
        data:{
            email: data.email,
            password: data.password,
        },
        headers:{
            "Content-Type":"application/json"
        }
    }).then( response => {
        return response.data;
    }).catch(e => {
        return false;
    })

    return {
        type: SIGN_USER,
        payload: request
    }
}

export function signUp(data){
    const request = axios({
        method: 'POST',
        url:'https://jsonplaceholder.typicode.com/posts',
        data:{
            email: data.email,
            password: data.password,
        },
        headers:{
            "Content-Type":"application/json"
        }
    }).then( response => {
        return response.data;
    }).catch(e => {
        return false;
    })

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function autoSignIn (refreshToken){
    const request = axios({
        method: 'POST',
        url:'https://demo6636880.mockable.io/token',
        data:"grant_type=refresh_token&refresh_token=" + refreshToken,
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        }
    }).then( response => {
        return response.data;
    }).catch(e => {
        return false;
    })

    return {
        type: AUTO_SIGN_IN,
        payload: request
    }
}

