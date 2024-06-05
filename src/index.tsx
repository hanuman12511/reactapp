import React from 'react'
import {Text} from 'react-native'
import NavigationRoute from './navigation'
import { NavigationContainer } from '@react-navigation/native';
import {Context} from './utility/Context'
import { addtocart, userdata } from './data';
export default function App(){
    return(
        <Context.Provider value={[addtocart,userdata]}>
        <NavigationContainer>
        <NavigationRoute/>
        </NavigationContainer>
        </Context.Provider>
    )
}