import {
    REGISTER_USER
} from '../types';

import axios from 'axios';


export function signUp(data){
    // const request = axios({
    //     method: 'POST',
    //     url:'',
    //     data:{
    //         email: data.email,
    //         password: data.password,
    //         rememberPassword: data.rememberPassword
    //     },
    //     headers:{
    //         "Content-Type":"application/json"
    //     }
    // }).then( response => {
    //     console.log(response.data);
    //     return response.data;
    // }).catch(e => {
            // return false;
    // })

    return {
        type: REGISTER_USER,
        payload: data
    }
}

