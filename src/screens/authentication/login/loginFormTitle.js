import React from 'react';
import { Text, View } from 'react-native';
import I18n from '../../../i18n';
import Styles from './styles';

const LoginFormTitle = () => (
    <View style={{alignItems:"center"}}>
        <Text style={Styles.iniciar_sesion_label}>{I18n.t('screens.loginScreen.login_label')}</Text>
    </View>
);

export default LoginFormTitle;