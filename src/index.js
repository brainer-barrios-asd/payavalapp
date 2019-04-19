import React,{Component} from 'react';
import {
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme,
} from 'react-native-paper';
import Navigator from './navigation';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2fccf2',
  },
};

export default class App extends Component {
  
  render() {
    return (

        <PaperProvider theme={theme}>
            <Navigator/>         
        </PaperProvider>
        
    );
  }
}

