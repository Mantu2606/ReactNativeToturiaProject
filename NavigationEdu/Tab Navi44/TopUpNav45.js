import { View,Text,Button, TextInput } from "react-native"

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

 // if run on top (1- npm install @react-navigation/material-top-tabs react-native-tab-view) run on Cmd
 // 2- npm install react-native-pager-view  run if use virtual emulator 
 // 3 - npm start --clean-cache  (if any type mistake) 
 // 4 - npx react-native run-android  ( all step run after for running android)
 const Tab = createMaterialTopTabNavigator(); 
 const TopUpNav45 = () => {
return(
  <NavigationContainer>
  <Tab.Navigator>
     <Tab.Screen name="Login" component={Login} />
     <Tab.Screen name="SignUp" component={SignUp} />
     <Tab.Screen name="Other" component={SignUp} />
  </Tab.Navigator>
</NavigationContainer>
)
}; 

const Login = () => {
return <View style={{justifyContent: 'center', alignItems:'center',flex:1}}>
<Text style={{fontSize:30}}>Login</Text>
</View>
}

const SignUp = () => {
return <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:20}}>SignUp</Text>
</View>
}
export default TopUpNav45                   