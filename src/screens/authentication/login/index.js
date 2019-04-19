import React, {Component} from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header, CopyRight } from '../../../components';
import LoginPanel from './loginPanel';
import Styles from './styles';
import { getOrientation, 
         setOrientationListener, 
         removeOrientationListener, 
         getPlatform } from '../../../utils/misc';



class LoginScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            checked: true,
            platform: getPlatform(),
            orientation: getOrientation(500),
        };

        setOrientationListener(this.changeOrientation);
    }

    changeOrientation = () =>{
        this.setState({
            orientation: getOrientation(500),
        })
    }

    onPressRememberPassword = () => {
        this.setState({
            checked:!this.state.checked,
        });
    }

    componentWillUnmount(){
        removeOrientationListener();
    }

    render(){

        return(
            <View style={Styles.container}>
            
                <ScrollView style={Styles.scrollViewContainer}>
                    
                    <Header/> 
                    
                    <LoginPanel platform={this.state.platform}/>

                    {this.state.orientation === 'landscape'  
                    ? <CopyRight/> 
                    : null}
                    
                </ScrollView>

                {this.state.orientation === 'portrait'  
                ? <CopyRight/> 
                : null}
                        
            </View>
        )
    }
}


export default LoginScreen;