import React, { useContext, useEffect, useRef } from 'react'
import { Context } from '../utility/Context';
import {TouchableOpacity,Text,TextInput} from 'react-native'
function Addtocart(){
    let [addtocart,usedata] = useContext(Context);
    console.log("addtocart screen",addtocart);
    let name:any = useRef("");
    useEffect(()=>{
name.current.fucus

    },[])
    function onPressClick(){
        console.log("raja",name.current.value);
        name.current.value=""
       
        
    }
    console.log("hello");
    
return(
<>
<Text>{name.current}</Text>
<TextInput ref={name}
  onChangeText={(e) => name.current.value = e}
  placeholder='enter name'
 />
<TouchableOpacity onPress={onPressClick}>
    <Text>
        Click
    </Text>

</TouchableOpacity>
<Text >{name.current}</Text>
</>
)
}
export default Addtocart