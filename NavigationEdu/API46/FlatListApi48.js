import { useEffect, useState } from "react";
import { FlatList, Text,View } from "react-native"

const FlatListApi48 = () => {
  const [data, setData] = useState([]); 
  const getAPIData = async() => {
    const url = 'https://jsonplaceholder.typicode.com/posts'; 
    let result =await fetch(url); 
    result =await result.json(); 
    setData(result); 
  }

  useEffect(()=>{
    getAPIData()
  },[]); 

return(
  <View>
      <Text style={{fontSize:30}}>
        FlasList With API Data
      </Text>
      {
        data.length?
        <FlatList 
        data={data}
        renderItem={({item}) => <View style={{borderBottomColor:'red', borderWidth:1,margin:10}}>
          <Text style={{fontSize:30, backgroundColor:
          'yellow'}}>{item.id}</Text>
          <Text style={{fontSize:20}}>{item.title}</Text>
          <Text style={{fontSize:20}}>{item.body}</Text>
          </View>}
        /> 
        :
        null
      }
  </View>
)
}
export default FlatListApi48