import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeStack from './StackNavigators'
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'
import { colors } from '../global/styles'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen
            name='HomeStack'
            component={HomeStack}
            options={{
                title:'Home',
                headerShown: false,
                drawerIcon: ({focussed,size})=>
                    <Icon 
                        name='home'
                        color={ focussed?'#7cc':colors.grey2}
                        size={size}
                    />
            }}
        />
    </Drawer.Navigator>
)

export default DrawerNavigator