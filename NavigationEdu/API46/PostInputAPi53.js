import { Button, StyleSheet, Text,TextInput,View } from "react-native"
import React, { useState } from "react";


const PostInputApi53 = () => {

  const [name, setName] = useState(''); 
  const [age, setAge] = useState(0); 
  const [lName, setLname] = useState(''); 
 
   const [nameError, setNameError] = useState(false); 
   const [ageError, setAgeError] = useState(false); 
   const [lNameError, setLnameError] = useState(false); 

  const saveData = async () => {
     // here is  value validation 
    if(!name){
      setNameError(true)
    }
    else{
      setNameError(false); 
    }

    if(!age){
      setAgeError(true)
    }
    else{
      setAgeError(false); 
    }
    if(!lName){
      setLnameError(true)
    }
    else{
      setLnameError(false); 
    }
    if(!name || !age|| !lName){
      return false
    }

    console.warn("next"); 

    const url = "http://10.0.2.2:3000/users" ; 
    let result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({name,lName,age})
    }); 
    result = await result.json(); 
    if(result){
      console.warn("Data added")
    }
    
  }
  return(
  <View>
     <Text style={{fontSize:40}}>Post api with Input Field data</Text>
    
      <TextInput placeholder="Enter Name" value={name} onChangeText={(text) => setName(text)} style={Styles.input}/>
      { nameError ? <Text style={Styles.errorText}>Please Enter Valid Name</Text>:null}
      
      <TextInput placeholder="Enter Age"
       value={age} onChangeText={(text) => setAge(text)} style={Styles.input}/>
        {
         ageError ? <Text style={Styles.errorText}>Please Enter Valid Age </Text> : null
        }
      
      <TextInput placeholder="Enter lName" value={lName} onChangeText={(text) => setLname(text)} style={Styles.input}/>
      { setLnameError ? <Text style={Styles.errorText}>Please Enter Valid lName</Text>:null}
      <Button title="Save Data" onPress={saveData} />
  </View>
 )
}; 
 const Styles = StyleSheet.create({
  input:{
    borderColor:'skyblue' ,
    borderWidth:1,
    margin: 20,
    fontSize:30,
    marginBottom:10
  },
  errorText:{
    color:'red',
    marginLeft:20
  }
 })

export default PostInputApi53