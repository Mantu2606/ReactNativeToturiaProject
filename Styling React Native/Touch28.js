
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
const Touch28 = () => {
    
    return(
        <View style= {styles.main}>
          <TouchableHighlight>
          <Text style={[styles.button,styles.success]} >Success</Text>
          </TouchableHighlight>
          <TouchableHighlight>
          <Text style={[styles.button,styles.Primary]} >Primary Button</Text>
          </TouchableHighlight>
          <TouchableHighlight>
          <Text style={[styles.button,styles.warning]} >warning Button</Text>
          </TouchableHighlight>
          <TouchableHighlight>
          <Text style={[styles.button,styles.error]} >Error Button</Text>
          </TouchableHighlight>
        
          <TouchableHighlight>
            <Text style={styles.button}>Button{/*This is main , above are dublicate */}</Text>
          </TouchableHighlight>
         </View>
            )
       } 
        
          const styles = StyleSheet.create({
            main:{
              flex: 1
            },
            button:{
                backgroundColor: 'yellow' ,
                color: 'green',
                fontSize: 24,
                textAlign:'center',
                padding: 20,
                margin: 30,
                borderRadius: 10,
                shadowColor:'black',
               elevation: 10,
               shadowOpacity: 1
            },
            success: {backgroundColor: 'pink'},
            Primary  : {backgroundColor: 'blue'},
            warning  : {backgroundColor: 'gold'},
            error  : {backgroundColor: 'blue'}
         })

export default Touch28