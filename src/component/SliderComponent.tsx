import React from 'react'
import {Text,View,Image,StyleSheet} from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
export default function SliderComponent(){

    console.log("silder");
    
    const  images= [
       require('../assets/bike/bajaj/avenger-street-160.webp'),
       require('../assets/bike/enfield/bullet.webp'),
       require('../assets/bike/bajaj/avenger-street-160.webp'),
       require('../assets/bike/bajaj/avenger-street-160.webp')
      ]
    return(
        <View style={ styles.mainviewslider}>
       <SliderBox images={images} />
        </View>
    )
}
const styles = StyleSheet.create({
    mainviewslider:{
        height:250,
        marginHorizontal:5,
        marginVertical:10,
        backgroundColor:'#fff',


    }
})