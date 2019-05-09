
import { createStackNavigator } from 'react-navigation';
import {LoginScreen, SplashScreen, HomeScreen, FlightScreen} from '../../screens';
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
    },
    [Screens.Home]:{
      screen: HomeScreen,
      navigationOptions: {
          header: null,
        },
    },
    [Screens.Flight]:{
      screen: FlightScreen,
      navigationOptions: {
          header: null,
        },
  },
   },
   {
    initialRouteName: Screens.Splash
   }
);

export default AuthNavigator;