/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Splash from './Splash';
import Login from './src/components/Login/Login';
import Home from './src/components/Home/Home';
import Arc from './src/components/Structures/ARC/Arc';
import Mu from './src/components/Structures/MU/Mu';
import MuSuccess from './src/components/Structures/MU/HomeSuccess';
import ArcSuccess from './src/components/Structures/ARC/HomeSuccess';

const MyApp = DrawerNavigator({
  LoginScreen: {
    screen: Login
  },
  HomeScreen: {
    screen: Home
  },
  MuScreen: {
    screen: Mu
  },
  ArcScreen: {
    screen: Arc
  },
  HomeMu: {
    screen: MuSuccess
  },
  HomeArc: {
    screen: ArcSuccess
  }
})

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: MyApp }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
  })
})

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false
    };
  }

  componentDidMount() {
    this._mounted = true;
    setTimeout(() => {
      this.setTimePassed();
    }, 1500);
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  setTimePassed() {
    this.setState({timePassed: true});
  }

  render() {
    if (!this.state.timePassed) {
      return <Splash />
    } else {
      return <MyApp />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
