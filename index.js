import React, { Component } from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import Splash from './Splash';
import Login from './src/components/Login/Login';
import Home from './src/components/Home/Home';
import Arc from './src/components/Structures/ARC/Arc';
import Mu from './src/components/Structures/MU/Mu';

AppRegistry.registerComponent('ParkDavis', () => App);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Warning: Can', 'Module RCTImageLoader']);