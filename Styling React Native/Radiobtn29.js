import React, { useState } from 'react' 
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Radiobtn29 = () => { 
  
    // we should direct run without calling in App folder because it will not access propaply 
   {/* 1-This will be creating two  radio botton && 2-multiple array using radio btn */}
   {/*const [selectedRadio,setSelectedRadio] = useState(2)
  return ( // In the react native radion btn not present so we create rBtn. 
  <View style={styles.main}>
     <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
      <View style={styles.radioWrapper} >
          <View style = {styles.radio} >
            {
              selectedRadio === 1 ? <View style={styles.radioBg}></View>: null
            }
            </View>
            <Text style= {styles.radioText}>Radio 1</Text>
      </View>
     </TouchableOpacity>

     <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
      <View style={styles.radioWrapper} >
          <View style = {styles.radio} >
              {
                selectedRadio === 2 ? <View style={styles.radioBg}></View>: null
              }
              </View>
          
          <Text style= {styles.radioText}>Radio 2</Text>
      </View>
     </TouchableOpacity>
  </View>
)
} 

const styles = StyleSheet.create({
main: {
  flex: 1, 
  alignItems: 'center',
  justifyContent: 'center'
 },
radioText:{
  fontSize: 20,
  color: 'skyblue'
},
radioBg:{
  backgroundColor: 'black',
  height: 28,
  width: 28,
  borderRadius: 20,
  margin: 4
},
radio:{
  height: 40,
  width:40,
  borderColor:'black',
  borderWidth:2,
  borderRadius: 20,
  margin: 10
},


radioWrapper:{flexDirection:'row',alignItems:'center'}
})
*/

{/* 2-multiple array btn using */}

const skills = [
    {
        id: 1,
        name: "Java"
    },
    {
        id: 2,
        name: "PHP"
    },
    {
        id: 3,
        name: "Node"
    },
    {
        id: 4, 
        name: "SQL"
    }
 ]
 const [selectedRadio, setSelectedRadio] = useState(1)

 return(
    <View style={styles.main} >
        {
        skills.map((item,index)=> <TouchableOpacity 
        key= {index}
        onPress={()=>setSelectedRadio(item.id)}>
        <View style = {styles.wrapper}>
            <View style={styles.radio}>
                { selectedRadio == item.id?
                 <View style={styles.radioBg}></View>: null
                 }
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
        </View>
         </TouchableOpacity>)
        }
    </View>
    ); 
}
    const styles = StyleSheet.create({
        main: {
          flex: 1, 
          alignItems: 'center',
          justifyContent: 'center'
         },
        radioText:{
          fontSize : 20,
          color: 'skyblue'
        },
        radioBg:{
          backgroundColor: 'black',
          height: 28,
          width: 28,
          borderRadius: 20,
          margin: 4
        },
        radio:{
          height: 40,
          width:40,
          borderColor:'black',
          borderWidth:2,
          borderRadius: 20,
          margin: 10
        },
        wrapper:{flexDirection:'row',alignItems:'center'}
        })

    export default Radiobtn29 