import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../global/styles'
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'

const WhereTo = () => {
  return (
    <View style={styles.view1}>
        <Text style={styles.text}>Where to?</Text>
        <View style={styles.view2}>
        <Icon 
            name='clock-time-four'
            color={colors.grey1}
            size={26}
        />
        <Text style={{marginLeft:5}}>Now</Text>
        <Icon 
            name='chevron-down'
            color={colors.grey1}
            size={26}
        />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    view1:{
        flexDirection:'row',
        marginTop :5,
        height:50,
        backgroundColor:colors.grey6,
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:15
    },
    view2:{ 
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
        backgroundColor:'white',
        paddingHorizontal:10,
        paddingVertical:2,
        borderRadius:20
    },
    text:{
        marginLeft:15,
        fontSize:18,
        color:colors.black
    }
})

export default WhereTo