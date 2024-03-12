import React, { useState }  from "react"; 
import { Text,View,FlatList, SectionList } from "react-native";

const SectionList_18 = () => {

  const users = [ // section list is used inner array and flatlist is used only single array
      {
        id:1,
        name:'Anil',
        data:["php","react js","Angular"]
      },{
        id:2,
        name:'mantu',
        data:["java","js","C++"]
      },
      {
        id:3,
        name:"Bruce",
        data:["c","C++","Java"]
      },
      {
        id:4,
        name:"Tony",
        data:["Css","Bootstrape","HTML"]
      }
    ]
  return ( 
    
    
    <View>
     <Text style={{fontSize: 30}}>Section List in Loop Dynamic</Text>
     <SectionList 
      sections={users}
      renderItem={({item}) =><Text style ={{fontSize:20}}>{item}</Text>}
     renderSectionHeader={({section:{name}}) => (
       <Text style = {{fontSize:25,color:'red'}}>{name}</Text>
     )}
     />
   </View>
  );
  }; 

export default SectionList_18; 