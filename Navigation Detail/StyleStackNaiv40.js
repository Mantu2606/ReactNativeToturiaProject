import { View,Text,Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator();
const StyleStackNavi40 = () => {
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
          title:"User Login",
          headerStyle:{
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
}; 

const Home = () => {
 return (
 <View style={{flex:1, justifyContent: 'center',alignItems:'center'}}>
   <Text style={{fontSize:20}}>My family </Text>
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
export default StyleStackNavi40 