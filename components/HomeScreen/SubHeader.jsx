import { Image, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../global/styles'

const SubHeader = () => {
  return (
    <View style={styles.home}>
      <Text style={styles.text1}>
          Destress your commute
      </Text>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Text style={styles.text2}> 
            Read a book. Take a nap. Stare out the window
          </Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Ride with Uber</Text>
          </View>
        </View>
        <View>
          <Image 
            style={styles.car}
            source={require('../../assets/uberCar.png')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  home:{
    backgroundColor:colors.blue,
    paddingLeft:20,
  },
  text1:{
    color:colors.white,
    fontSize:21,
    paddingBottom:20,
    paddingTop:20
  },
  text2:{
    color:colors.white,
    fontSize:14
  },
  view1:{
    flexDirection:'row',
    flex:1,
    paddingTop:30
  },
  view2:{
    flex:4,
    marginTop:-25
  },
  button:{
    height:40,
    width:150,
    backgroundColor:colors.black,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20
  },
  buttonText:{
    color:colors.white,
    fontSize:16,
    marginTop:-2
  },
  car:{
    height:100,
    width:100,
  }
})

export default SubHeader