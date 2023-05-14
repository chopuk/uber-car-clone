import { StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/RequestScreen/Map'
import Header from '../components/RequestScreen/Header'
import ForWho from '../components/Shared/ForWho'

const RequestScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <ForWho navigation={navigation}/>
      <Header navigation={navigation}/>
      <Map/>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
})

export default RequestScreen