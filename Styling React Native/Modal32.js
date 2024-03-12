import { useState } from "react";
import { Text,StyleSheet,Button,Modal ,View } from "react-native";

const Modal32 = () => { // Modal in simple word a dialog box(it is a alert box)
    const [showModal, setShowModal] = useState(false); 
    return(
      <View style = {styles.main}> 
        <Modal 
        transparent={true}
        visible={showModal}
        animationType="slide"
        >
           <View style = {styles.centeredView}> 
              <View style={styles.modalView}>
             <Text style={styles.modalText}>Hello Code step by step</Text>
             <Button title='Close Modal' onPress={()=>setShowModal(false)} />
               </View>
           </View>
        </Modal>
        <View style = {styles.buttonView} >
          <Button title="Open Modal" onPress={() => setShowModal(true)} />
        </View>
      </View>
  )
  }
  
  const styles = StyleSheet.create({
  main: {
      flex: 1
  },
  buttonView: {
      flex: 1,
      justifyContent: 'flex-end'
  },
  centeredView:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: 'yellow',
    padding: 40,
    borderRadius: 20,
    shadowColor: "black",
    elevation: 10
  },
  modalText:{
    fontSize: 30,
    marginBottom: 20
  }
})
export default Modal32