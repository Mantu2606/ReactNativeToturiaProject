import { useEffect, useState } from "react"
import { Button, Text, View } from "react-native"

const ShowHide25 = () => { 
    {/*...............show hide component 
    const [show, setShow] = useState(false)
    return(
        <View>
            <Text style={{fontSize:30}}>Show/Hide Component </Text>
            <Button title="Toggle Component" onPress={()=>setShow(!show)} />
         
         {
            show ? <User /> : null
         }
       </View>
    )
}

const User = () => {
    return (
        <View>
            <Text style={{fontSize:30, color: 'green'}}>User Component</Text>
        </View>
    ) 
     */}
     
     const [show, setShow] = useState(true)
     return(
         <View>
             <Text style={{fontSize:30}}>Show/Hide Component </Text>
             <Button title="Toggle Component" onPress={()=>setShow(!show)} />
          
          {
             show ? <User /> : null
          }
        </View>
     )
 }
 
 const User = () => {
    let timer = setInterval(()=> {
        console.warn("Timer Called"); 
    },2000); 

    useEffect(()=> {
        return () => clearInterval(timer)
    })
     return (
         <View>
             <Text style={{fontSize:30, color: 'green'}}>User </Text>
         </View>
     ) 
}

export default ShowHide25; 