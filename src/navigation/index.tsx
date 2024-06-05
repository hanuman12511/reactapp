import React from 'react'
import {Text} from 'react-native'
import HomeScreen from '../screen/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../screen/Details';
import Addtocart from '../screen/Addtocart';
import Order from '../screen/Order';

const Stack = createStackNavigator();
export default function NavigationRoute(){
    return(
        <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="addtocart" component={Addtocart} />
      <Stack.Screen name="order" component={Order} />
     
    </Stack.Navigator>
    )
}