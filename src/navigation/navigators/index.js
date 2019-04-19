import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Screens from '../../constants/screens';
import AuthNavigator from './authNavigator';

export const RootNavigator = createSwitchNavigator(
  {
    [Screens.Auth]: AuthNavigator,
  },
  {
    initialRouteName: Screens.Auth,
  });

export default createAppContainer (RootNavigator);