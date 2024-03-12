import React, { useState }  from "react"; 
import { Button, StyleSheet, Text, View } from "react-native";
import ExStyles from './style' 
const CssStyle = () => {
  return (
    <View>
      {/*Code is correct for styling in native}
       {/* Inline Style */}
      <Text style= {{fontSize:30 , color:'green'}}>Props inn react js</Text>
        {/* Internal Style */}
      <Text> I love india</Text>
      <Text style= {style.textBox}>Props inn react js</Text>
      <Text style= {style.textBox}>Props inn react js</Text>
      <Text style= {style.textBox}>Props inn react js</Text>
       {/* External Style is use extra file name like style.js */}
      <Text style = {ExStyles.textBox} > Styel in React Native</Text>
      <Text style = {[style.textBox, ExStyles.textBox,{marginTop:20}]} >Style is the </Text>
   </View> 
  )
}; 
{/* Internal Style */}
const style = StyleSheet.create({
  textBox : {
    color: 'red' ,
    fontSize: 30,
    backgroundColor:'blue',
    borderRadius: 10,
    textAlign: 'center',
  height:50,
    marginBottom : 10,
    padding:10
  }
})

export default CssStyle  