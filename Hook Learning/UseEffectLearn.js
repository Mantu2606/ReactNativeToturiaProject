import { useEffect, useState } from "react"
import { Button, Text, View } from "react-native"

const UseEffectLearn = () => { 
    
     // Mount - when we call a function, use a step, or call a variable , *unMount - Hide the function
    const [count, setCount] = useState(0); 
    const [data, setData] = useState(50); 
    {/* // useEffect use in State 
    useEffect(()=>{
        console.warn("do some animation"); 
    },[count]); // [ ] it is automatic mount(loading) one times if any value then that times loading . 

    useEffect(() => {
        console.warn("Call Some API here"); 
    },[data]); 
    */}
    return(
        <View>
             <Text style={{fontSize:30}}>{data} Life Cycle With Ui {count}</Text>
             <Button title="Count" onPress={() => setCount(count+1)} />
             <Button title="Data" onPress={() => setData(data+1)} />
            {/* useEffect in props */}
             <User info = {{data,count}} />
        </View> 
    )
}

const User = (props) => {

     useEffect(()=>{
        console.warn("run this code when data prop is updated"); 
     },[props.info.data]) 

     useEffect(()=> {
        console.warn("Run this code when count prop is updated"); 
     },[props.info.count])
    return(
        <View>
           <Text style={{fontSize:30}}>data:{props.info.data}</Text>
           <Text style={{fontSize:30}}>count:{props.info.count}</Text>
        </View>
    )
}

export default UseEffectLearn