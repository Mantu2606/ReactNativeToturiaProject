import { Text, View } from "react-native"

const Home = (props) => {
  console.warn('I love india') ; 
  const {name, age} = props.route.params; 
    return (
    <View style={{flex:1, justifyContent: 'center',alignItems:'center'}}>
      <Text style={{ fontSize:20 }}>Home Screen </Text>
      <Text style={{ fontSize:20 }}>Name :{name} </Text>
      <Text style={{ fontSize:20 }}>Age  : {age} </Text>
    </View> 
    )
   }
export default Home