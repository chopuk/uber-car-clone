import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors, parameters } from '../../global/styles'
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'

const Header = () => {
  return (
    <View style={styles.header}>
        <View style={styles.icon}>
            <Icon 
                name='menu'
                color={colors.white}
                size={40}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:colors.blue,
        height:parameters.headerHeight,
        alignItems:'flex-start'
      },
    icon:{
        marginLeft:10,
        marginTop:5
    }
})

export default Header