import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../../global/styles'
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'
import { recentPlaces } from '../../global/data'

const RecentPlace = ({place}) => (
    <View style={styles.view1}>
        <View style={styles.view2}>
            <View style={styles.view3}>
                <Icon 
                    name='map-marker'
                    color={colors.black}
                    size={26}
                />
            </View>
            <View>
                <Text style={{fontSize:18,color:colors.black}}>
                    {place.street}
                </Text>
                <Text style={{color:colors.grey3, fontSize:14}}>
                    {place.area}
                </Text>
            </View>
        </View>
    <View>
      <Icon 
        name='chevron-right'
        color={colors.grey}
        size={26}
      />
    </View>
  </View>
)

const RecentPlaces = () => {
  return (
    <View>
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            {recentPlaces.map((place,index) => (
                <RecentPlace place={place} key={index} />
            ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    view1:{ 
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        paddingVertical:25,
        justifyContent:'space-between',
        marginHorizontal:15,
        borderBottomColor:colors.grey4,
        borderBottomWidth:1,
        flex:1
    },
    view2:{
        alignItems:'center',
        flex:5,
        flexDirection:'row'
    },
    view3:{
        backgroundColor:colors.grey6,
        height:40,
        width:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginRight:20
    }
})

export default RecentPlaces