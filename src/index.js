import React,{Component} from 'react';
import Navigator from './navigation';
import { Provider } from 'react-redux';
import ConfigureStore from './store/config';
import {
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme,
} from 'react-native-paper';


const store = ConfigureStore();

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

        <Provider store={store}>
          <PaperProvider theme={theme}>
              <Navigator/>         
          </PaperProvider>
        </Provider>
        
    );
  }
}

