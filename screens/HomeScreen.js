import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import { colors } from '../global/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Location from 'expo-location'
import Header from '../components/HomeScreen/Header'
import SubHeader from '../components/HomeScreen/SubHeader'
import UberOptions from '../components/HomeScreen/UberOptions'
import WhereTo from '../components/HomeScreen/WhereTo'
import RecentPlaces from '../components/HomeScreen/RecentPlaces'
import Map from '../components/HomeScreen/Map'

export default function HomeScreen({navigation}) {

  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }
      let locationData = await Location.getCurrentPositionAsync({})
      setLocation({latitude: locationData.coords.latitude, longitude: locationData.coords.longitude})
      setLoading(false)
    })()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ScrollView bounces={false}>
        <SubHeader navigation={navigation}/>
        <UberOptions/>
        <WhereTo/>
        <RecentPlaces setLocation={setLocation}/>
        <Text style={styles.around}>Around You</Text>
        <View style={{alignItems:'center',justifyContent:'center'}}>
          {!loading &&
            <Map location={location}/>
          }
          {errorMsg && <Text style={{color:'red'}}>{errorMsg}</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
    container:{
      backgroundColor:colors.d,
      paddingBottom:30
    },
    around:{ 
      fontSize:20,
      color:colors.black,
      marginLeft:20,
      marginBottom:20
    }

})