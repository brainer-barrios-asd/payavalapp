import React, {Component} from 'react';
import { View, Text, ScrollView, WebView  } from 'react-native';
import Styles from './styles';
import { Header, CopyRight } from '../../../components';   
import Screens from '../../../constants/screens';  
import { getOrientation, 
         setOrientationListener, 
         removeOrientationListener, 
         getPlatform } from '../../../utils/misc';

            

class HomeScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            platform: getPlatform(),
            orientation: getOrientation(500),
            isWebViewUrlChanged:false,
        };

        setOrientationListener(this.changeOrientation);
    }

    changeOrientation = () =>{
        this.setState({
            orientation: getOrientation(500),
        })
    }

    componentWillUnmount(){
        removeOrientationListener();
    }

    setWebViewUrlChanged = webviewState => {
        if (webviewState.url !==  'http://qa-merchant-alb-1145103748.us-east-2.elb.amazonaws.com/Account/RappiLogin?returnUrl=http://qa-merchant-alb-1145103748.us-east-2.elb.amazonaws.com') {
          this.setState({ isWebViewUrlChanged: true });
        }

        console.log(webviewState.url);
      };

    render(){

        return(
              <View style={Styles.container}>
            
              <Header/>
                    
            <WebView
                    source={{uri: 'http://qa-merchant-alb-1145103748.us-east-2.elb.amazonaws.com/Account/RappiLogin?returnUrl=http://qa-merchant-alb-1145103748.us-east-2.elb.amazonaws.com'}}
                    // useWebKit={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    style={{flex: 1,width:'100%', height: 100}}
                    // onLoadEnd={e => console.log("loadend event", e)}
                     onNavigationStateChange={ this.setWebViewUrlChanged }
                    >
            </WebView>
            
                    
     
          </View>
        )
    }
}


export default HomeScreen;