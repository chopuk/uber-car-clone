import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { mapStyle } from '../../global/mapStyle'
import { colors } from '../../global/styles'
import { DestinationContext, OriginContext } from '../../state/contexts'
import MapViewDirections from 'react-native-maps-directions'
import {GOOGLE_MAPS_APIKEY} from '@env'

const SCREEN_WIDTH = Dimensions.get('window').width

const Map = () => {

  const {origin} = useContext(OriginContext)
  const {destination} = useContext(DestinationContext)

  const mapRef = useRef()
  useEffect(() => {
    mapRef.current.fitToCoordinates([origin,destination],{animated:true})
  },[origin,destination])

  return (

    <View style={styles.mapView}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 54.265425,
          longitude: -4.109375,
          latitudeDelta: 8,
          longitudeDelta: 12
        }}
        showsUserLocation={true}
        followsUserLocation={true}
        style={styles.map}
        customMapStyle={mapStyle}
      >
        { origin.latitude != null && 
          <Marker
              coordinate={origin}
              anchor = {{x:0.5,y:0.5}}
          >
            <Image
              source={require('../../assets/location.png')}
              style={styles.markerOrigin}
              resizeMode='cover'
            />
          </Marker>
        }
        { destination.latitude != null && 
          <Marker
              coordinate={destination}
              anchor = {{x:0.5,y:0.5}}
          >
            <Image
              source={require('../../assets/location.png')}
              style={styles.markerDestination}
              resizeMode='cover'
            />
          </Marker>
        }
        { destination.latitude != null && 
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor={colors.black}
          />
        }
      </MapView>
    </View>
    
  )

}

const styles = StyleSheet.create({

  mapView: {
    alignItems:'center'
  },
  map:{
    height: 500,
    width:SCREEN_WIDTH*0.92
  },
  markerDestination: {
    width: 16,
    height: 16,
  },
  markerOrigin: {
    width: 20,
    height:20,
    borderRadius:10
    }

})

export default Map