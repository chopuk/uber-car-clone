import { Alert, StyleSheet } from 'react-native'
import React, { useContext,useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../global/styles'
import Geolocation from 'react-native-geolocation-service'
import ForWho from '../components/Shared/ForWho'
import { useRef } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_APIKEY} from '@env'
import { OriginContext, DestinationContext } from '../state/contexts'

navigator.geolocation = require('react-native-geolocation-service')

const DestinationScreen = ({navigation}) => {

  const {dispatchOrigin} = useContext(OriginContext)
  const {dispatchDestination} = useContext(DestinationContext)  

  const textInput1 = useRef(4)
  const textInput2 = useRef(5)

  const[displayDestination,setDisplayDestination] = useState(false)

  Alert.alert('KEY:' + GOOGLE_MAPS_APIKEY)

  return (
    <SafeAreaView style={styles.container}>
      <ForWho navigation={navigation}/>
      {!displayDestination &&
        <GooglePlacesAutocomplete
          query={{key:GOOGLE_MAPS_APIKEY,language:'en'}}
          onPress={(data,details = null) => {
            dispatchOrigin({
              type:'ADD_ORIGIN',
              payload:{
                latitude:details.geometry.location.lat,
                longitude:details.geometry.location.lng,
                address:details.formatted_address,
                name:details.name
              }
            })
            setDisplayDestination(true)
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          placeholder='From...'
          listViewDisplayed='auto'
          debounce={400}
          currentLocation={true}
          ref={textInput1}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          autoFocus={true}
          styles={autoComplete}
        />
      }
      {displayDestination &&
        <GooglePlacesAutocomplete
          query={{key:GOOGLE_MAPS_APIKEY,language:'en'}}
          onPress={(data,details = null) => {
            dispatchDestination({
              type:'ADD_DESTINATION',
              payload:{
                latitude:details.geometry.location.lat,
                longitude:details.geometry.location.lng,
                address:details.formatted_address,
                name:details.name
              }
            })
            navigation.goBack()
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          placeholder='Going to...'
          listViewDisplayed='auto'
          debounce={400}
          currentLocation={true}
          ref={textInput2}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          autoFocus={true}
          styles={autoComplete}
        />
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    
    view1:{
      position:"absolute",
      top:25,
      left:12,
      backgroundColor:colors.white,
      height:40,
      width:40,
      borderRadius:20,
      justifyContent:"center",
      alignItems:"center",
      marginTop:2, 
      zIndex: 10
    },
    view3:{
      flexDirection:"row",
      alignItems:"center",
      marginTop:2,   
      marginBottom:10,
      backgroundColor: colors.white,
      height:30,
      zIndex: 10
    },
    view2:{
        backgroundColor:colors.white,
        zIndex:4,
        paddingBottom:10,
        },
    view24:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:15,
        paddingHorizontal:20   
      }, 
      view25:{
        flexDirection:'row',
        alignItems:"baseline"
      },
      flatlist:{
          marginTop:20,
          zIndex:17,
          elevation:8
      }
})

const autoComplete = {
    
    textInput:{
        backgroundColor: colors.grey6,
        height: 50,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 15,
        flex: 1,
        borderWidth:1,
        marginHorizontal:15,
    },
    container: {
       paddingTop:20,
      flex: 1,
      backgroundColor:colors.white
          },
  
    textInputContainer: {
      flexDirection: 'row',
    }

}

export default DestinationScreen