import { useState } from "react";
import {Button, StatusBar, StyleSheet, View } from "react-native";

const StatusBar34 = () => {
    const [hide, setHide]=useState(false); 
 const [barStl,setBarStyle] = useState("default"); 
 return (
   <View style={styles.conatiner} >
      <StatusBar 
      backgroundColor="blue"
      barStyle={barStl}
      hidden={hide} 
      />
      <Button title='Toogle Status Bar' onPress={()=>setHide(!hide)} />
      <Button title='Update Style' onPress={()=>setBarStyle("dark-content")} />
  
   </View>
 ) 
}

const styles = StyleSheet.create({
   conatiner:{
      flex: 1,
      justifyContent: 'center'
   }
});


export default StatusBar34