import React,{Component} from 'react' ; 
import { Button, Text, TextInput, View } from "react-native";

class ClassCom19 extends Component{
  fruit = () => {
    console.warn("Apple"); 
  }
    render(){ // render - use class component showing in the UI page
      return(
        <View>
          <Text style = {{fontSize:30, textAlign:'center'}}>Class mantu </Text>
          <TextInput placeholder='Enter your name' />
          <Button title='press key' onPress={this.fruit} />
          
        </View>
      )
    }
} 
export default ClassCom19