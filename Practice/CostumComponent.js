import { Text,View,StyleSheet } from "react-native";
import React, { useState }  from "react"; 
import { Text,View,FlatList } from "react-native";

const CostumComponent = () => {

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
    id:8,
    name: "Sudhir",
    add:"vill-rampur dullah"
   }
  ]

  return ( 
    <View>
     <Text style={{fontSize: 30}}>Component in Loop Dynamic Data</Text>
    <FlatList 
    data ={users}
    renderItem={({ item }) => <userData item = {item} />} 
    />
   </View>
  );
  }; 


const  userData = (props) => {
    const item = props.item ; 
    return (
      <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.add}</Text>
    </View>
    )
  }

  const styles = StyleSheet.create({
    item:
    {
      fontSize: 24,
      color: 'orange',
      flex: 1,
      margin:2,
      textAlign:'center'
     
    },
  box:{
       flexDirection:"row",
       borderWidth:3,
       borderColor:'orange',
       marginBottom:10
    }
  }
  )
  export default CostumComponent; 
