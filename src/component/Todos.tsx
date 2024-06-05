import React,{ memo } from "react";
import {Text,TouchableOpacity} from 'react-native'
const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
     
      {todos.map((todo, index) => {
        return <Text key={index}>{todo}</Text>;
      })}
      <TouchableOpacity onPress={addTodo}>
        <Text>
            Add Todo
        </Text>
        </TouchableOpacity>
    </>
  );
};

export default memo(Todos);