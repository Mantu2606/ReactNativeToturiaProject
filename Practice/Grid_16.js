import React, { useState }  from "react"; 
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const Grid_16 = () => {

  const users = [
    {
    id:1,
    name: "mantu"
   }, 
   {
    id:2,
    name: "upender",
    add:"vill-rampur dullah"
   },
   {
    id:3,
    name: "Sridevi",
    add:"vill-rampur dullah"
   },
   {
    id:4,
    name: "Mohan",
    add:"vill-rampur dullah"
   },
   {
    id:5,
    name: "Rohan",
    add:"vill-rampur dullah"
   },
   {
    id:6,
    name: "mohit",
    add:"vill-rampur dullah"
   },
   {
    id:7,
    name: "stri",
    add:"vill-rampur dullah"
   },
   {
    id:8,
    name: "Sudhir",
    add:"vill-rampur dullah"
   }
  ]

  return (
    <View>

     <Text style={{fontSize: 30}}>Welcome in Grid Dynamic Data</Text>
     <ScrollView>
     <View style={{flex:1,flexDirection:'row', flexWrap:'wrap' }}> 
     {
      users.map((item)=><Text style={styles.abc}>{item.name}</Text>)
     }
        </View>
     </ScrollView>
   </View>
  )
  }; 

  const styles = StyleSheet.create({
    abc:
    {
      fontSize:25,
      backgroundColor:'blue',
      color:'red',
      margin:5,
      padding:5,
      width:120,
      height:120,
      textAlignVertical:'center',
      textAlign:'center'
    }
  })


export default Grid_16; 