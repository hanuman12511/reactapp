import React, { useCallback, useMemo, useState } from "react";
 import {ActivityIndicator, Text,TextInput,TouchableOpacity,View} from 'react-native'
import CallBackText from "../component/CallBackText";
import Todos from "../component/Todos";
function Order() {
    const [number, setNumber] = useState(0);

    const squaredNum =
     useMemo(
        ()=>{return squareNum(number)}
        ,[number]
        );
    const [counter, setCounter] = useState(0);
    const [isLoad, setLoad] = useState(false);
    const [todos, setTodos] = useState([]);
    // Change the state to the input
    const onChangeHandler = (e) => {
        setNumber(e);
    };
 
    // Increases the counter by 1
    const counterHander = () => {
        setLoad(true)
        setTimeout(()=>{
            setCounter(counter + 1);
            setLoad(false)
        },2000)
      
       
    };
    const addTodo =useCallback(()=>{ 
        setTodos((t) => [...t, "New Todo"]);
    },[todos])
    console.log("render");
    
    return (
        <View>
             <Todos todos={todos} addTodo={addTodo} />
            <CallBackText name={number} />
         <TextInput
                type="number"
                placeholder="Enter a number"
              value={number}
                onChangeText={onChangeHandler}
            />
 
            <Text>OUTPUT: {squaredNum}</Text>
            <TouchableOpacity onPress={counterHander}>
                <Text>Counter ++</Text>
            </TouchableOpacity>
            <Text>Counter : {counter}</Text>
            {
                isLoad&&<ActivityIndicator/>
                }
        </View>
    );
}
function squareNum(number) {
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
}
 
 
export default Order;