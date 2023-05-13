import { StyleSheet,Dimensions } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, parameters } from '../global/styles'
import Map from '../components/RequestScreen/Map'
import Header from '../components/RequestScreen/Header'
import ForWho from '../components/Shared/ForWho'
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height
import { DestinationContext, OriginContext } from '../state/contexts'

const RequestScreen = ({navigation}) => {

  const {origin,dispatchOrigin} = useContext(OriginContext)
  const [userOrigin,setUserOrigin] = useState({
    latitude:origin.latitude,
    longitude:origin.longitude
  })
  const {destination,dispatchDestination} = useContext(DestinationContext)
  const [userDestination,setUserDestination] = useState({
    latitude:destination.latitude,
    longitude:destination.longitude
  })

  useEffect(()=>{
    setUserOrigin({
      latitude:origin.latitude,
      longitude:origin.longitude
    }) 
    setUserDestination({
      latitude:destination.latitude,
      longitude:destination.longitude
    }) 
  },[origin,destination])

  return (
    <SafeAreaView style={styles.container}>
      <ForWho navigation={navigation}/>
      <Header navigation={navigation}/>
      <Map userOrigin={userOrigin} userDestination={userDestination}/>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({

    container1:{flex:1,
        paddingTop:parameters.statusBarHeight,
        
    },

    container: {
        flex: 1
       
      },
      contentContainer: {
        flex: 1,
        alignItems: 'center',
       
      },

      text1:{
          marginLeft:10,
          fontSize:16,
          color:colors.grey1
      },
     view10:{
        alignItems:"center",
        flex:5,
        flexDirection:"row",
        paddingVertical:10,
        borderBottomColor:colors.grey5,
        borderBottomWidth:1,
        paddingHorizontal:15
     },
     view11:{
        backgroundColor:colors.grey,
        height:30,
        width:30,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        marginRight:15,
        marginTop:15,
     },

     contentContainer: {
        backgroundColor: 'white',
      },

    view12:{
        alignItems:"center",
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:colors.grey4
    },

    text2:{
        fontSize:18,
        color:colors.grey1
    },
    text3:{
        fontSize:16,
        color:colors.black,
        fontWeight:"bold",
        marginRight:5,
     
    },

    text4:{color:colors.grey2,
        marginTop:4
                },

    view13:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        paddingHorizontal:15,
        paddingVertical:5
    },

    button1:{
        height:40,
        width:100,
        backgroundColor:colors.grey6,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
     },

    button2:{
        height:50,
        backgroundColor:colors.grey10,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginHorizontal:30
     },

    
  
     button1Text:{
       
       fontSize:17,
       marginTop:-2,
       color:colors.black
  
     },

     button2Text:{
        color:colors.white,
        fontSize:23,
        marginTop:-2,
       
   
      },

      
    view14:{
     
    
      alignItems:"center",
      flex:5,
      flexDirection:"row"
    },
    view15:{
      backgroundColor:colors.grey6,
      height:40,
      width:40,
      borderRadius:20,
      alignItems:"center",
      justifyContent:"center",
      marginRight:20
      
    },

    view16:{
        flexDirection:"row",
        alignItems:"baseline"
    },

    text5:{
        fontSize:12,
        color:colors.black,
        marginLeft:3,
        fontWeight:"bold",
        paddingBottom:1
        
    },

    view19:{flex:1.7,
        alignItems:"flex-end",
      
    },

    icon:{paddingBottom:2},

    image2:{height:60,width:60 },

    view20:{marginRight:10 },

    text6:{
        fontSize:15,
        color:colors.black,
        fontWeight:"bold", 
    },

    view21:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:30,
        marginTop:15
    },

 view22:{
        alignItems:"center",
        marginBottom:-20
 },

 sectionHeaderContainer: {
    backgroundColor: "white",
    marginTop:30,
    paddingLeft:15
  },

 text7 : {
    fontSize:28,
    color:colors.black,
    marginRight:5,
 
},

text8:{
    fontSize:15,
    color:colors.grey2,
    textDecorationLine:"line-through"
 
 
},

button3:{
   
    height:60,
    backgroundColor:colors.black,
    alignItems:"center",
    justifyContent:"center",
    width:SCREEN_WIDTH-110,
    marginBottom:10
 },

view23:{
   flexDirection:"row", 
   backgroundColor:colors.cardbackground,
  // elevation:10,
   justifyContent:"space-between",
   alignItems:"flex-end",
   paddingHorizontal:20,
   height:80,
  
},

button2Image:{
    height:55,
    width:55,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:colors.grey6,
    marginBottom:10,
    
}
,
text9:{fontSize:15,
       color:colors.grey1
    },


    map:{
        marginVertical: 0,
        width:SCREEN_WIDTH,
        zIndex: -1
      }, 
      
      centeredView: {
        zIndex:14
      },
      modalView: {
        marginHorizontal: 20,
        marginVertical:60,
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical:20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        zIndex:16
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
        marginTop:20
    },

})

export default RequestScreen