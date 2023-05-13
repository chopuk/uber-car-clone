import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../global/styles'
import { optionsData } from '../../global/data'
const SCREEN_WIDTH = Dimensions.get('window').width

const uberOptions = ({item}) => (

    <View style={styles.card}>
      <View style={styles.view}>
        <Image style={styles.image} source={item.image} />
      </View>
      <View>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </View>

)

const UberOptions = () => {

  return (
    <View>
        <FlatList
            numRows={4}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={optionsData}
            keyExtractor={(item)=>item.id}
            renderItem={uberOptions}
        />
    </View>
  )

}

const styles = StyleSheet.create({

    image:{
        height:60,
        width:60,
        borderRadius:30,
    },
    card:{
        alignItems:'center',
        margin:SCREEN_WIDTH/22
    },
    view:{
        marginBottom:5,
        borderRadius:15,
        backgroundColor:colors.grey6
    },
    title:{
        color:colors.black,
        fontSize:16
    }
    
})

export default UberOptions