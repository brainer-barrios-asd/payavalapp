
import { createStackNavigator } from 'react-navigation';
import {LoginScreen, SplashScreen} from '../../screens'
import Screens from '../../constants/screens';

const AuthNavigator = createStackNavigator(
   {
    [Screens.Splash]:{
        screen: SplashScreen,
        navigationOptions: {
            header: null,
          },
    },
    [Screens.Login]:{
        screen: LoginScreen,
        navigationOptions: {
            header: null,
          },
    }
   },
   {
    initialRouteName: Screens.Splash
   }
);

export default AuthNavigator;