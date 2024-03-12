import React, { useState }  from "react"; 
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import style from "./style";


const InputForm = () => { 
   //.....We are creating a input form 
  const [name, setName] = useState(" "); 
  return (
    <View>
      <Text style = {{fontSize: 30}} >Handle Text Input</Text>
      <Text style = {{fontSize: 30}} >Your name is: {name}</Text>
      <TextInput 
         style={styles.textInput} 
         placeholder="Enter your name" 
         value={name}
         onChangeText={(text)=>setName(text)}  
         />
      <Button title="Clear Input value" onPress={()=>setName('')} />
   </View> 
  )
  }; 

  const styles = StyleSheet.create({
    textInput : {
    fontSize:18,
    color : 'blue',
    borderWidth: 3,
    borderColor: 'blue,'
    }
  })
export default InputForm; 