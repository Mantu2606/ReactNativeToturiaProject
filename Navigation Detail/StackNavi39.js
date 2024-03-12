import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {  Text,Button, View } from "react-native";

const Stack = createNativeStackNavigator(); 
const StackNavi39 = () => {
   return(
     <NavigationContainer>
         <Stack.Navigator>
         
         <Stack.Screen name='Login' component={Login} />
         <Stack.Screen name='Home' component={Home} />
        
         </Stack.Navigator>
     </NavigationContainer>
   )
}; 

const Home = () => {
  return (
  <View style={{flex:1, justifyContent: 'center',alignItems:'center'}}>
    <Text style={{fontSize:20}}>Home Screen</Text>
  </View>
  )
}
const Login = (props) => {

  return (
  <View style={{ flex:1, justifyContent: 'center',alignItems: 'center'}}>
    <Text style={{ fontSize:20 }}>Login Screen</Text>
  <Button title = 'Go to Home Page' onPress={()=> props.navigation.navigate("Home")} />
  </View>
  )
}
export default StackNavi39 