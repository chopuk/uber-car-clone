import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../global/styles'
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'
import { Avatar } from 'react-native-elements'

const ForWho = ({navigation}) => {

    return (
      <>
          <View style={styles.arrow}>
              <Icon 
                  name='arrow-left'
                  color={colors.grey1}
                  size={30}
                  onPress={()=>navigation.goBack()}
              />
          </View>
          <View style={styles.heading}>
              <TouchableOpacity>
                  <View style={styles.who}>
                      <Avatar
                          rounded
                          avatarStyle={{}}
                          size={30}
                          source={require('../../assets/blankProfilePic.jpg')}
                      />
                      <Text style={{marginLeft:5}}>For Someone</Text>
                      <Icon 
                          name='chevron-down'
                          color={colors.grey1}
                          size={26}
                      />
                  </View>
              </TouchableOpacity>
          </View>
      </>
    )
  
  }
  
  const styles = StyleSheet.create({
    
    arrow:{
        position:'absolute',
        top:28,
        left:12,
        backgroundColor:colors.white,
        height:40,
        width:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        marginTop:2, 
        zIndex: 8
    },
    heading:{
        height:40,
          alignItems:'center',
          zIndex: 5,
          backgroundColor:colors.white
    },
    who:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:2,   
        marginBottom:10,
        backgroundColor: colors.white,
        zIndex:10
    }

  })
  
  export default ForWho