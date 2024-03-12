import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ListWithAPI55 = () => {
    const [data, setData] = useState([])
    const getAPIData = async () => {
        const url = "http://10.0.2.2:3000/users";
        let result = await fetch(url);
        result = await result.json();
        console.warn(result);
        if (result) {
            setData(result)
        }
    }
    useEffect(() => {
        getAPIData();
    }, [])

    return (
     <View style={styles.container}>
      
    <View style={styles.dataWrapper}>
        <View style={{flex:2}}><Text>Name</Text></View>
         <View style={{flex:2}}><Text>lName</Text></View>
         <View style = {{flex:1}}><Text>Operation</Text></View>
    </View>
    {
       data.length ?
         data.map((item) => <View style={styles.dataWrapper}>
          <View style={{flex:1}}><Text>{item.name}</Text></View>
           <View style={{flex:1}}><Text>{item.lName}</Text></View>
          
           <View style={{flex:1}}><Button title="Delete" /></View>   
           <View style={{flex:1}}><Button title="Update" /></View>
                    </View>)
                    :
                    null
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dataWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'orange',
        margin: 5,
        padding: 8
    }

})
export default ListWithAPI55; 