import React, { memo } from 'react'
import {Text} from 'react-native'
function  CallBackText(props:any){
    console.log("call");
    
    return(
        <Text>{props.name}</Text>
    )
}
export default memo(CallBackText)