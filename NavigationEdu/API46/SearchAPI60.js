import React, { useEffect, useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

const SearchAPI60 = () => {
    const [data, setData] = useState([]); 
    const searchUser =async (text) => {
    const url = `http://10.0.2.2:3000/users?q=${text}`;  // ?q=${text}'it is add in the url'- if text then call text

    let result = await fetch(url); 
    result = await result.json(); 
    if(result){
     setData(result)
    }
    }

   return(
     <View style={{flex:1}}>
       <TextInput style={{borderColor:'skyblue',borderWidth:1, margin:15,fontSize:20}} 
       placeholder={"Search"}
       onChangeText={(text)=>searchUser(text)}
       />
      {
        data.length ? 
        data.map((item)=><View style={{padding:10, flexDirection:'row'}}>
            <Text>{item.name}</Text>
            <Text>{item.lName}</Text>
            <Text>{item.age}</Text>
            </View>) 
            : null
      }
     </View>
   )
}
export default SearchAPI60; 