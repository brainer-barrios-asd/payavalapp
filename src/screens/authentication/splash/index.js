import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import I18n from '../../../i18n';
import { Logo } from '../../../components';
import Screens from '../../../constants/screens';
import Styles from './styles';

class SplashScreen extends Component{
    static navigationOptions= {
        title:'Splash',
    };

    render(){
        const {navigate} = this.props.navigation;

        return(
            <View style={Styles.container}>
                <View style={Styles.header_content}>
                   <Image source={require('../../../assets/images/Ovalo1_splash.png')} ></Image>
                   <Image source={require('../../../assets/images/patron_circulos_splash.png')}></Image>
                </View>
                <View style={Styles.content}>
                    <View style={Styles.triangulo_superior}>
                        <Image source={require('../../../assets/images/triangulo_izquierdo_splash.png')}></Image>
                        <Image source={require('../../../assets/images/triangulo_derecho_splash.png')}></Image>
                    </View>

                    <Logo style={Styles.logo}></Logo>

                    <View style={Styles.triangulo_inferior}>
                         <Image source={require('../../../assets/images/triangulo_izquierdo_splash2.png')}></Image>
                         <Image source={require('../../../assets/images/triangulo_derecho_splash2.png')}></Image>
                    </View>
                </View>
                <View style={Styles.footer_content}>

                    <View style={ Styles.footer_content_image_container }>
                        <Image source={require('../../../assets/images/Ovalo2_splash.png')}  style={Styles.footer_content_image} ></Image>
                    </View>
                    <View style={Styles.button_group}>
                        <TouchableOpacity
                            style={Styles.login_button}
                            onPress={()=>{navigate(Screens.Login)}}>
                            <Text style={Styles.login_text}> {I18n.t('screens.splashScreen.login_label')} </Text>                            
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.register_button}>
                            <Text  style={Styles.register_text}> {I18n.t('screens.splashScreen.register_label')} </Text>

                        </TouchableOpacity>
                    </View> 
                </View>
            </View>
        )
    }
}



export default SplashScreen ;