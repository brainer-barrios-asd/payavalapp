import {
    REGISTER_USER,
    SIGN_USER,
    AUTO_SIGN_IN,
} from '../types';

import axios from 'axios';



export function signIn (data){
    // const request = axios({
    //     method: 'POST',
    //     url:'https://jsonplaceholder.typicode.com/posts',
    //     data:{
    //         email: data.email,
    //         password: data.password,
    //     },
    //     headers:{
    //         "Content-Type":"application/json"
    //     }
    // }).then( response => {
    //     return response.data;
    // }).catch(e => {
    //     return false;
    // })

    const request = axios({
        method: 'POST',
        url:'https://api.novopayment.net/oauth2.0/1.0/token',
        data:{
            grant_type: "client_credentials",
            client_id: "e97d057dde513bbe631d3ab28f963eb9",
            client_secret: "6aa6bca7e34a8e172b0f7f7505afc3e6"
        },
        headers:{
            'content-type': 'application/json',
            'x-language': 'es',
            'x-channel': 'channel',
        }
    }).then( response => {
        console.log(response.data);
        return response.data;
    }).catch(e => {
        console.log(e);
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

