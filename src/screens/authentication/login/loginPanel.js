import React, {Component} from 'react';
import { View } from 'react-native';
import Styles from './styles';
import LoginForm from './loginForm';
import LoginFormTitle from './loginFormTitle';

class LoginPanel extends Component{
    render(){

        return(
            <View>

                <LoginFormTitle/>

                <LoginForm/>

            </View>
        )
    }
}

export default LoginPanel;