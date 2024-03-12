import {Button, Text, View,Platform, StyleSheet } from "react-native";

const PlatForm35 = () => {
    return(
        <View>
         <Text style={{fontSize:30 }}>
            Platform:{Platform.OS}
         </Text>
         {
           Platform.OS =="android" ? 
           <View style={{backgroundColor: 'green',height: 100, width: 100}}></View>
           : 
           <View style={{backgroundColor:'red',height: 100, width: 100}}></View>
         }
         <Text style = {styles.text}>Hello</Text>
         <Text style={{fontSize: 20}}>{JSON.stringify(Platform.constants.reactNativeVersion)}{/* for react ver..*/}</Text>
        </View>
     ); 
     }
     const styles = StyleSheet.create({
       text:{
        color: Platform.OS=="android" ? "black": "blue",
        fontSize: 30 
       }
     })
export default PlatForm35 