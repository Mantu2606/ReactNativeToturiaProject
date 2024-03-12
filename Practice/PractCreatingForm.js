import React, { useState }  from "react"; 
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import style from "./style";


const PractCreatingForm = () => {
   const [name,setName] = useState(""); 
   const [email,setEmail] = useState(""); 
   const [Password,setPassword] = useState(""); 
   const [display, setDisplay] = useState(false); 

   const resetFormData = () => {
    setDisplay(false); 
    setEmail(""); 
    setName(""); 
    setPassword(""); 
   }

  return (
    <View>
     <Text style ={{fontSize:30}}>Simple Form in React Native</Text>
     <TextInput 
     style = {styles.textInput}
     placeholder="Enter User Name"
     onChangeText={(text) => setName(text)}
     value={name}
     />
    <TextInput 
     style = {styles.textInput}
     placeholder="Enter User Password"
     secureTextEntry = {true} // show ... in password fields
     onChangeText={(text) => setPassword(text)}
     value={Password}
     />
    <TextInput 
     style = {styles.textInput}
     placeholder="Enter User Name"
     onChangeText={(text) => setEmail(text)}
     value={email}
     />
    
    <View style={{marginBottom: 10}} >
      <Button color={"green"} title="Print Details" onPress={()=> setDisplay(true)} />
    </View>
    
      <Button title="Clear Details" onPress={resetFormData}></Button>
   <View> 
       {
        display ?
        <View>
           <Text style={{fontSize: 15}}>User Name is: {name}</Text>
           <Text style = {{fontSize: 15}}>User Password is: {Password}</Text>
           <Text style = {{fontSize:15}}>User Email is: {email}</Text>
           </View>
            : null
       }
       </View>
       </View>
  )
  }; 

  const  styles = StyleSheet.create({
    textInput: {
      fontSize: 18,
      color: 'blue',
      borderWidth: 2,
      borderColor: 'black',
      margin: 10
    }
  })
export default PractCreatingForm; 