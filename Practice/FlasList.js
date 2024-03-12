import React, { useState }  from "react"; 
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import style from "./style";


const FlasList = () => {

  const users = [
    {
    id:1,
    name: "Mantu"
   }, 
   {
    id:2,
    name: "Rohit",
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
   }
  ]

  return (
    <View>
     <Text style={{fontSize: 30}}>Welcome in Flat List Component</Text>
     <ScrollView style={{marginBottom:50}}>
     {
     /*
      <FlatList  // FlatList is use for creating a List in the android
     data={users}
     renderItem={({item})=><Text style={styles.item} >{item.add}</Text>}
     />
     */} 
     {
      users.map((item)=><Text style={styles.abc}>{item.name}</Text>)
     }
     </ScrollView>
   </View>
  )
  }; 

  const styles = StyleSheet.create({
    abc:{
      fontSize: 25,
      padding:10,
      color: 'blue',
      backgroundColor:'yellow',
      borderColor: 'black',
      margin: 20
    }
  })

export default FlasList; 