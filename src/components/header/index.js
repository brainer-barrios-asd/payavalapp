import React from 'react';
import { View,Image} from 'react-native';
import Logo from '../logo';
import Styles from './styles';


const Header = () => (
    <View style={Styles.container}>
        <Logo/>
    </View>
);
    

export default Header;