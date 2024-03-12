import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ListApi47 from './NavigationEdu/API46/ListApi47';


const App = () => {
  return (
    <View style={styles.main}>
     <View style={styles.box1}>
        <View style={styles.InnerBox1}></View> 
        <View style={styles.InnerBox2}></View>
         <View style = {styles.InnerBox3}></View>
      </View>
    <View></View>
    <View></View>


      </View>
    )
  };
  const styles = StyleSheet.create({
    main:{
      flex:1
    },
     box1:{
      flex:2
     }
  })

export default App;
