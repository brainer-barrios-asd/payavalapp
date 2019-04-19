import {
    REGISTER_USER
} from '../types';


export default function(state={}, action){
    
    switch (action.type) {
        case REGISTER_USER:
            return {...state,User:action.payload}
            break;
        default:
            return state;
            break;
    }
}