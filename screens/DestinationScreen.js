import { StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ForWho from '../components/Shared/ForWho'
import Search from '../components/DestinationScreen/Search'

const DestinationScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <ForWho navigation={navigation}/>
      <Search navigation={navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default DestinationScreen