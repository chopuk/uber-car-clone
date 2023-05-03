import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import HomeScreen from './screens/HomeScreen'

// keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

const App = () => {

  // display the splash screen for 1 second...
  setTimeout(async () => {
    await SplashScreen.hideAsync()
  }, 2000)

  return (
    <View style={styles.container}>
      <StatusBar barStyle = 'light-content' hidden ={false} backgroundColor = '#35a4e8' translucent ={true}/>
      <HomeScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})
