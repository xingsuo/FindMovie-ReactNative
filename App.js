/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

import AppActivityTabNavigator from './src/router/Navigators';

export default class App extends Component {
  render() {
    return (
      <AppActivityTabNavigator />
    );
  }
}