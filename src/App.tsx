import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import LandingPage from './components/landingPage'
import Login from './components/login'
export default class App extends Component {
  render() {
    return (
      <View >
     
       <Login/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
})
