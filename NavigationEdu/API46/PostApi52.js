import { Button, Text,View } from "react-native"
import React from "react";

const PostAPi52 = () => {
  const saveAPIData = async() =>{
    const data = {
      name:"Santosh",
      lName:"chauhan",
      age:3
    }
  const url = "http://10.0.2.2:3000/users"; 
  let result = await fetch(url,{
    method:"POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(data)
  })
  result = await result.json(); 
  console.warn(result); 
}
  return(
  <View>
     <Text style={{fontSize:40}}>
      Post API Call
      </Text>
      <Button title="Save Data" onPress={saveAPIData} />
    
</View>
)
}; 
export default PostAPi52