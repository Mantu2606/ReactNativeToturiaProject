import { View,Text,Button, TextInput } from "react-native"

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator(); // if run on botton (npm install @react-navigation/bottom-tabs) and   
const BottomNav44 = () => { // if not working use npm start --clean-cache
  return(
    <NavigationContainer>
       <Tab.Navigator>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="SignUp" component={SignUp} />
       </Tab.Navigator>
    </NavigationContainer>
  )
}; 

const Login = () => {
  return <View>
    <Text>Login</Text>
  </View>
}

const SignUp = () => {
  return <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:20}}>SignUp</Text>
  </View>
}
export default BottomNav44