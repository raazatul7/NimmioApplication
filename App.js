import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import Home from './screens/Home'


export default class App extends React.Component {
  
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: Home,
  Login: LoginScreen
})

const AppContainer = createAppContainer(AppStackNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
