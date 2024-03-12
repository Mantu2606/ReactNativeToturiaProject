import React,{Component} from 'react'   ; 
import { Button, Text, TextInput, View } from "react-native";

class StateClass20 extends Component{
    constructor(){ // class components use in states
      super() ; // super key is construct the Component constructor
      this.state = {
      name:"mantu"
      }
  }
    render() { // render - use class component showing in the UI page
      return(
        <View>
          <Text style = {{fontSize:30, textAlign:'center'}}>{this.state.name} </Text>
          <TextInput placeholder='Enter your age' />
          <Button title='press key' />
          
        </View>
      )
    }
} 
export default StateClass20