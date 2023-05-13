import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { mapStyle } from '../../global/mapStyle'
import { colors } from '../../global/styles'
const SCREEN_WIDTH = Dimensions.get('window').width

const Map = ({userOrigin,userDestination}) => {

  return (

    <View style={styles.mapView}>
      <MapView
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
        { userOrigin.latitude != null && 
          <Marker
              coordinate={userOrigin}
              anchor = {{x:0.5,y:0.5}}
          >
            <Image
              source={require('../../assets/location.png')}
              style={styles.markerOrigin2}
              resizeMode='cover'
            />
          </Marker>
        }
        { userDestination.latitude != null && 
          <Marker
              coordinate={userDestination}
              anchor = {{x:0.5,y:0.5}}
          >
            <Image
              source={require('../../assets/location.png')}
              style={styles.markerDestination}
              resizeMode='cover'
            />
          </Marker>
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

  markerWrapOrigin: {
    //  alignItems: "center",
     // justifyContent: "center",
       width:40,
      height:20,
     // marginTop:0
     },
     markerOrigin: {
        width: 16,
        height: 16,
        borderRadius:8
     },

     destination: {
        width:20,
       height:20,
       backgroundColor:colors.black,
       alignItems:"center",
       justifyContent:"center"
      },

      view1: {
        width:7,
       height:7,
       backgroundColor:colors.white
      },
      markerDestination: {
       width: 16,
       height: 16,
       
      },
      
      markerOrigin2: {
        width: 20,
        height:20,
        borderRadius:10
       },

car:{
    paddingTop:0,
    width: 40,
    height: 20,
   },

   view2:{
    position:"absolute",
    top:10,
    right:12,
    backgroundColor:colors.white,
    height:40,
    width:180,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    marginTop:2, 
    zIndex: 8
    
  },    

view3:{ flexDirection:"row",
alignItems:"center",
//marginRight:15,
//backgroundColor:"white",
//paddingHorizontal:2,
paddingVertical:2,
//borderRadius:20
},

view4:{
position:"absolute",
top:50,
left:12,
backgroundColor:colors.white,
height:40,
width:140,
borderRadius:20,
justifyContent:"center",
alignItems:"center",
marginTop:2, 
zIndex: 8

}, 

location: {
width: 20,
height: 20,
borderRadius:9,
backgroundColor:colors.black,
alignItems:"center",
justifyContent:"center"

}, 

view9:{width:6,
height:6,
borderRadius:4,
backgroundColor:"white"
}     

})

export default Map