import React, {useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const UseRef61 = () => {
    const input = useRef(); 

    const updateInput =()=>{
       input.current.focus(); 
       input.current.setNativeProps({
        fontSize:34,
        color:'yellow'
       })
    }
   return(
    <View style={styles.container}>
       <TextInput ref ={input} style={styles.input} placeholder="Enter Name" />
       <TextInput ref = {input} style={styles.input} placeholder="Enter Password" />
       <Button title="Update Input"  onPress={updateInput} />

    </View>
   )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      padding:15,
    },
    input:{
        borderColor:'skyblue',
        borderWidth:3,
        margin: 10
    }
})
export default UseRef61