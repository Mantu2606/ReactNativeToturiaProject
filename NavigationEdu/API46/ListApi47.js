import React, { useEffect, useState } from "react";
    import { View,ScrollView, Text} from 'react-native';
   
    const ListApi47 = () => {
       const [data, setData] = useState([]); 
       const getAPIData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts"
        let result = await fetch(url); 
        result = await result.json(); 
        setData(result); 
       }
       useEffect(()=>{
        getAPIData()
       },[]); 
     return(
        <ScrollView>
           <Text style={{fontSize:30}}>List With API</Text>
           {
            data.length ?
            data.map((item)=>
              <View style={{padding:10, borderBottomColor:'blue',borderBottomWidth:1}}>
                <Text style={{fontSize:20}}>id: {item.id}</Text>
                <Text style={{fontSize:20}}>Title: {item.title}</Text>
                <Text style={{fontSize:20}}>Body: {item.body}</Text>
                </View>
            )
            : 
            null
           }
        </ScrollView>
     )
    }
   
export default ListApi47 