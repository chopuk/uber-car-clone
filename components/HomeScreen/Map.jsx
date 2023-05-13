import { StyleSheet,Dimensions,Image } from 'react-native'
import React, { useRef } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { mapStyle } from '../../global/mapStyle'
import { carsAround } from '../../global/data'
const SCREEN_WIDTH = Dimensions.get('window').width

const Map = ({location}) => {

  const mapRef = useRef(1)

  return (
    <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0058,
            longitudeDelta: 0.0026,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
        style={styles.map}
        customMapStyle={mapStyle}
    >
        {carsAround.map((item,index) =>
        <Marker
            coordinate={item}
            key={index}
        >
            <Image
                source={require('../../assets/carMarker.png')}
                style={styles.carsAround}
                resizeMode='cover'
            />
        </Marker>
        )}
    </MapView>
  )

}

const styles = StyleSheet.create({

    map:{
        height: 500,
        marginVertical: 0,
        width:SCREEN_WIDTH*0.92
    },
    carsAround:{
        width: 28,
        height: 14,
    }
    
})

export default Map