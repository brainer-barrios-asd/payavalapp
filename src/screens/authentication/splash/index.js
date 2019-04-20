import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import I18n from '../../../i18n';
import { Logo } from '../../../components';
import Screens from '../../../constants/screens';
import Styles from './styles';
import { getOrientation, 
         setOrientationListener, 
         removeOrientationListener, 
         getPlatform,
         getTokens,
         setTokens } from '../../../utils/misc';
import { ActivityIndicator } from 'react-native-paper';
import { connect } from 'react-redux';
import { autoSignIn } from '../../../store/actions/user_actions';
import { bindActionCreators } from 'redux';

class SplashScreen extends Component{
    static navigationOptions= {
        title:'Splash',
    };

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            platform: getPlatform(),
            orientation: getOrientation(500),
        }

        setOrientationListener(this.changeOrientation);
    }

    componentDidMount(){
        getTokens( (values) =>{
            if(values[0][1] === null){
                this.setState({loading:false})
            } else {
                this.props.autoSignIn(values[1][1]).then( () => {
                    if(!this.props.User.userData.token){
                        this.setState({loading:false})
                    } else {
                        setTokens(this.props.User.userData, () =>{
                            this.setState({loading:false})
                            //this.props.navigation.navigate(Screens.Home)
                        })
                    }
                })
            }
        })
    }

    componentWillUnmount(){
        removeOrientationListener();
    }

    changeOrientation = () =>{
        this.setState({
            orientation: getOrientation(500),
        })
    }

    render(){

        //const {navigate} = this.props.navigation;

        if(this.state.loading){
            return (
                <View styles={Styles.loading}>
                    <ActivityIndicator/>
                </View>
            )
        } else {
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
                                onPress={()=>{this.props.navigation.navigate(Screens.Login)}}>
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
}

function mapStateToProps(state){
    return {
        User: state.User
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({autoSignIn}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SplashScreen) ;