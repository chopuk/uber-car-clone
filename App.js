import React from 'react'
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import RootNavigator from './navigation/RootNavigator'
import { DestinationContextProvider, OriginContextProvider } from './state/contexts'

// keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

const App = () => {

  // display the splash screen for 1 second...
  setTimeout(async () => {
    await SplashScreen.hideAsync()
  }, 2000)

  return (
    <>
      <StatusBar barStyle = 'light-content' hidden ={false} backgroundColor = '#35a4e8' translucent ={true}/>
      <DestinationContextProvider>
        <OriginContextProvider>
          <RootNavigator/>
        </OriginContextProvider>
      </DestinationContextProvider>
    </>
  )
}

export default App
