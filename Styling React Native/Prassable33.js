import { View,Text,Pressable,StyleSheet } from "react-native"

const Prassable33 = () => {
    return(
        <View style = {styles.main}>
         <Pressable
         onPress={()=> console.warn("Normal on Press")}
         onLongPress={()=>{console.warn("Long press")}}
         onPressIn={()=>{console.warn("Press In")}}
         onPressOut={()=>{console.warn("press out")}}
         >
           <Text style={styles.PressableBtn} >
             Pressable
           </Text>
         </Pressable>
        </View> 
      )
      }
      
      const styles = StyleSheet.create({
        main:{
           flex: 1,
           justifyContent: 'center'
        },
        PressableBtn:{
          backgroundColor: 'blue',
          color: 'red',
          padding: 10,
          margin: 10,
          borderRadius: 10,
          fontSize: 20,
          textAlign: 'center',
          shadowColor: 'black',
          elevation:10
          
        }
      })
export default Prassable33