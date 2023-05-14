import { StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { colors } from '../../global/styles'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_APIKEY} from '@env'
import { OriginContext, DestinationContext } from '../../state/contexts'

const Search = ({navigation}) => {

  const {dispatchOrigin} = useContext(OriginContext)
  const {dispatchDestination} = useContext(DestinationContext)  

  const [displayDestination,setDisplayDestination] = useState(false)

  return (
    <>
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
          currentLocation={false}
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
          currentLocation={false}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          autoFocus={true}
          styles={autoComplete}
        />
      }
    </>
  )
}

const styles = StyleSheet.create({

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
    marginHorizontal:15
  },
  container: {
    paddingTop:20,
    flex: 1,
    backgroundColor:colors.white
  },
  textInputContainer: {
    flexDirection: 'row'
  }

}

export default Search