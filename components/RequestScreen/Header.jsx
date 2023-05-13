import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../../global/styles'
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const Header = ({navigation}) => {

  return (
    
    <View style={styles.heading}>
        <View style={styles.where}>
            <View>
                <Image
                    style={styles.image}
                    source={require('../../assets/transit.png')}
                />
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('DestinationScreen')}>
                    <View style={styles.fromWhere}>
                        <Text style={styles.text}>From Where?</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.to}>
                    <TouchableOpacity>
                        <View style={styles.whereTo}>
                            <Text style={styles.text}>...</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.cross}>
                        <Icon 
                            name='plus-thick'
                            color={colors.black}
                            size={26}
                        />
                    </View>
                </View>
            </View>
        </View>
    </View>
  )

}

const styles = StyleSheet.create({

    heading:{
        height:SCREEN_HEIGHT*0.15,
        alignItems:"center",
        zIndex: 5,
        backgroundColor:colors.white
    },
    who:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:2,   
        marginBottom:10,
        backgroundColor: colors.white,
        zIndex:10
      },
    where:{
        flexDirection:"row",
        alignItems:"center"  
    },
    whereTo:{
        backgroundColor:colors.grey7,
        width:SCREEN_WIDTH*0.70,
        height:40,
        justifyContent:"center",
        marginTop:10 
    },
    fromWhere:{
        backgroundColor:colors.grey6,
        width:SCREEN_WIDTH*0.70,
        height:40,
        justifyContent:"center",
        marginTop:10,
        paddingLeft:0
    },
    to:{
        flexDirection:"row",
        alignItems:"center"
    },
    cross:{
        marginLeft:10
    },
    text:{
        color:colors.grey2,
        paddingLeft:10
    },
    image:{  
        height:70,
        width:30,
        marginRight:10,
        marginTop:10
    }
})

export default Header