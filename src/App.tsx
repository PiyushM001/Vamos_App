import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, StyleSheet, View } from 'react-native'
import LandingPage from './components/landingPage'
import Login from './components/login'
import MapComp from './components/map';
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Login} />
      <Stack.Screen name="map" component={MapComp} />
     
    </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
})
