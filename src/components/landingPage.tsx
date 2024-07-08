import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import logo from '../../images/logo.png'

export default class LandingPage extends Component {
  render() {
    return (
        <View style={styles.divcss}>
        <Image style={styles.logo} source={logo} />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({

 
    logo:{
      height:110,
      width:300,
    },
    divcss:{
      height:'100%',
    
     
      backgroundColor:'#FFFFFF',
     
      alignItems:'center',
      justifyContent:'center',
    }
  })