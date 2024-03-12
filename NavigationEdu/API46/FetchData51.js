import { useEffect, useState } from "react";
import { Text,View } from "react-native"

const FetchData51 = () => {
  const [data, setData] = useState([]); 
  const getAPIData = async () => {
    const url = "http://10.0.2.2:3000/users" ; 
    // http://192.168.120.12:3000/users  we replace  10.0.2.2(it connect to emulator  )
    let result = await fetch(url); 
    result = await result.json(); 
    setData(result)
  }
  useEffect(()=>{
    getAPIData()
  },[])

return(
  <View>
   <Text style={{fontSize:30}}>Hello </Text>
  {
    data.length ? 
    data.map((item) => <View style={{borderWidth:1,borderColor:"red"}}>
    <Text style={{fontSize:30}}>{item.Name}</Text>
    <Text style={{fontSize:30}}>{item.age}</Text>
    
  </View>)
  : null
}
</View>
)
}
export default FetchData51