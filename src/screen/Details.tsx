import React, { useContext } from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import { Context } from '../utility/Context';
function Details({navigation}:any){
    let [addtocart,userdata] =useContext(Context);
    console.log("addtocart",addtocart);
    console.log("userdata",userdata);
    const addCart = () =>{
        addtocart.push("data")
        userdata.push("____")

    }
    function onPressAddtocart(){
             navigation.navigate("addtocart")
    }
    function onPressOrder(){
             navigation.navigate("order")
    }
    return(
        <View>
            <TouchableOpacity onPress={addCart}>
            <Text>
                {"Hello"}
            </Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={onPressAddtocart}>
            <Text>
                {"Hello"}
            </Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={onPressOrder}>
            <Text>
                {"Order"}
            </Text>
            </TouchableOpacity> 
        </View>
    )
}

export default Details