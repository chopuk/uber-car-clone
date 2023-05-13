import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import RequestScreen from '../screens/RequestScreen'
import DestinationScreen from '../screens/DestinationScreen'

const Home = createNativeStackNavigator()

const HomeStack = () => (
    <Home.Navigator>
        <Home.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{headerShown:false}}
        />
        <Home.Screen
            name='RequestScreen'
            component={RequestScreen}
            options={{headerShown:false}}
        />
        <Home.Screen
            name='DestinationScreen'
            component={DestinationScreen}
            options={{headerShown:false}}
        />
    </Home.Navigator>
)

export default HomeStack