import React  from 'react'
import {Text,View,StyleSheet }from 'react-native'
import Header from '../component/Header'
import SliderComponent from '../component/SliderComponent'
import ProductComponent from '../component/ProductComponent'
export default function HomeScreen({navigation}:any){
     function Product(){
            console.log("product call back");
            navigation.navigate("details")
            
     }
    return(
        <>
        <View style={styles.mainscreen}>
        <Header/>
        <SliderComponent/>
        <Text style={styles.bike}>Bike Show</Text>
        <ProductComponent onPress = {Product}/>
        </View>
        </>
    )
}

const styles=StyleSheet.create({
    mainscreen:{
        flex:1,
        backgroundColor:'gray'
    },
    bike:{
        fontSize:24,
        color:'#fff'
    }
})