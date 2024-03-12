import React, { useEffect, useState } from "react";
import { View, Text} from 'react-native';

const FirstApi46 = () => {
   const [data, setData] = useState(undefined) ; 

  const getAPIData = async() => {
    // api call  {/*(https://jsonplaceholder.typicode.com) it is a free api websites   */}
    const url = "https://jsonplaceholder.typicode.com/posts/1"; 
    // API method ( 1- any data gate " get method",2-store form data value "post method",
    // 3-any data delete "delete method",4- data update " put or fetch method " )
    let result = await fetch(url); // api call then bydefault behave like a get method
    result = await result.json(); 
     setData(result); 
  }

   useEffect(()=>{ // useEffect is automatically run 1st time because"[]" This idicates 
    getAPIData();
   },[])
   
 return(
    <View>
       <Text style={{fontSize:30}}>API Call </Text>
       {
        data ? <View>
          <Text style={{fontSize:30}} >{data.id}</Text>
          <Text style={{fontSize:30}} >{data.userId}</Text>
          <Text style={{fontSize:30}} >{data.title}</Text>
          <Text style={{fontSize:30}} >{data.body}</Text>
    </View> : null 
      } 
    </View>
 )
}
export default FirstApi46