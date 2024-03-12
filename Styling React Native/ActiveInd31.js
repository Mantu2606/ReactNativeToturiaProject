import { ActivityIndicator, Button, StyleSheet, View } from "react-native"
import style from "../style"
import { useState } from "react";

const ActiveInd31 = () => { //  ActivityIndicator component used in Loader , animatine is false used to hiding animatoring
    const [show, setShow] = useState(false); 
    const displayLoader = () => {
        setShow(true); 
 
        setTimeout(() => {
         setShow(false)
        },3000);
        // API call 
       }
     return  (
       <View style = {styles.main}>
         {/* <ActivityIndicator size={50} color={'red'} animating={false} if false then hide the indicator */}
         <ActivityIndicator size={50} color={'red'} animating={show} ></ActivityIndicator>
         <Button title="'show loader" onPress={displayLoader} />
       </View>
   ); 
 }
 
 const styles = StyleSheet.create({
   main: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   }
 })
export default ActiveInd31