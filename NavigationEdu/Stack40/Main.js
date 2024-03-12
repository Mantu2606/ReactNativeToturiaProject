import { View,Text,Button, TextInput } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";

const Stack = createNativeStackNavigator();
const Main = () => {
  const btnAction = () => {
    console.warn("Btn Pressed"); 
  }
  return(
    <NavigationContainer>
        <Stack.Navigator  
        screenOptions={{
          headerStyle:{
            backgroundColor:'blue',
          },
         headerTintColor:'white',// it means text color who is at header
          headerTitleStyle: {
            fontSize:25
          }
        }}>
        <Stack.Screen name='Login' component={Login}
         options={{
          headerTitle:()=><Button onPress={btnAction} title="Left" />,
          headerRight:()=><Header /> , // <Button onPress={btnAction} title="right" />, { it can be  header right side  btn }
          title:"User Login",
          headerStyle: {
            backgroundColor:"red"
          },
          headerTitleStyle:{
            fontSize:25
          }
        }}
        />

        <Stack.Screen name='Home' component={Home} />
       
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const Header = () => {
  return(
    <TextInput  placeholder="name" />
  )
}

export default Main 