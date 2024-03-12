import { useState } from "react";
import { Button,TextInput,Text, View } from "react-native"

const Login = (props) => {
   const [name, setName] = useState(""); 
   const age = 33; 
    return (
    <View style={{ flex:1, justifyContent: 'center',alignItems: 'center'}}>
      <Text style={{ fontSize:20 }}>Login Screen</Text>
    <TextInput 
      style ={{fontSize:20,borderColor:"white",borderWidth: 2}}
      onChangeText={(text)=>setName(text)} placeholder="Enter Name" />
    <Button title = 'Go to Home Page' 
    onPress={()=>
     props.navigation.navigate("Home",{name,age})} />
    </View>
    )
   }
   export  default Login