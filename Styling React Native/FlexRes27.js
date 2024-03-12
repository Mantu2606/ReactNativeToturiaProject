import { StyleSheet, View } from "react-native"

const FlexRes27 = () => {

    return(
        <View style={style.main}>
        <View style={style.box1}>
           <View style= {style.InnerBox1}></View>
           <View style= {style.InnerBox2}></View>
           <View style= {style.InnerBox3}></View>
        </View>
        <View style={style.box2}></View>
          <View style={style.box3}></View>
       
         
        </View>
      ); 
    }

    const style = StyleSheet.create({
      main:{
        flex:1
      },
      box1:{
        flex:2, backgroundColor: 'red', flexDirection: 'row'
      },
      box2:{
        flex:1,backgroundColor: 'green'
      },
      box3: {
        flex:1,backgroundColor: 'blue' 
      },
      InnerBox1:{
        flex:1,
        backgrounsdColor: 'skyblue',
        margin:10
      },
      InnerBox2:{
        flex:1,
        backgroundColor: 'blue',
        margin:10
      },
      InnerBox3:{
        flex:1,
        backgroundColor: 'orange',
        margin:10
      }
    }
    ); 

export default FlexRes27