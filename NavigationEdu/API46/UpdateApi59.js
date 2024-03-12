import React, { useEffect, useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
  // 57,58 ,59 vidoe props data, populate data
const UpdateApi59 = () => {
        const [data, setData] = useState([])
        const [showModal, setShowModal] = useState(false); 
        const [selectedUser, setSelectedUser] = useState(undefined)

        const getAPIData = async () => {
            const url = "http://10.0.2.2:3000/users";
            let result = await fetch(url);
            result = await result.json();
            console.warn(result);
            if (result) { 
                setData(result)
            }
        }
    
        const deleteUser = async (id)=>{
            const url = "http://10.0.2.2:3000/users"; 
            let result = await fetch(`${url}/${id}`,{
                method: "delete"
            }); 
            result = await result.json();
            if(result){
                console.warn("User deleted"); 
                getAPIData(); 
            }
        }
        useEffect(() => { getAPIData() }, []); 

        const updateUser = (data) => {
            setShowModal(true)
            setSelectedUser(data)
        }
    
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
              
               <View style={{flex:1}}><Button onPress={()=>deleteUser(item.id)} title="Delete" /></View>   
               <View style={{flex:1}}><Button  title="Update" onPress={()=>updateUser(item)}/></View>
                        </View>)
                        :
                        null
                }

                <Modal visible={showModal} transparent={true}>
                <UserModal  setShowModal ={setShowModal} selectedUser={selectedUser} getAPIData={getAPIData} />
                </Modal>
            </View>
        )
    };
    const UserModal=(props)=> {
       console.warn(props.selectedUser); 
        const [name, setName] = useState(undefined); 
        const [age, setAge] = useState(undefined); 
        const [lName, setLname] = useState(undefined); 

        useEffect(()=>{
            if(props.selectedUser){
            setName(props.selectedUser.name); 
            setAge(props.selectedUser.age.toString());
            setLname(props.selectedUser.lName);
            }
        },[props.selectedUser])

        const updateUser =async () => { // APi PUt Method 59 lecture 
            console.warn(name,lName,age,props.selectedUser.id); 
            const url = "http://10.0.2.2:3000/users"; 
            const id = props.selectedUser.id; 

            let result = await fetch(`${url}/${id}`,{
                method: "Put",
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({name,age,lName})
            }); 
            result =  await result.json(); 
            if(result){
                console.warn(result); 
                props.getAPIData(); // automatically refresh
                props.setShowModal(false); 
            }
        }
       return( <View style={styles.centeredView}>
        <View style={styles.modalView}>
           <TextInput  style={styles.input} placeholder="Enter Name" value={name}
            onChangeText={(text)=>setName(text)} />
           <TextInput  style={styles.input} placeholder="Enter lName" value={lName}
           onChangeText={(text)=>setLname(text)}/>
           <TextInput  style={styles.input} placeholder="Enter Age" value={age}
           onChangeText={(text)=>setAge(text)}/>
           <View style={{marginBottom:15}}>
            <Button title="Save" onPress={updateUser} />
            </View>
           <Button title="Close" onPress={()=>props.setShowModal(false)}/>
       </View>
       </View>
       )
    }
    
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
        },
        centeredView:{
            flex:1,
            justifyContent: 'center',
            alignItems:'center',
        },
        modalView:{
            backgroundColor:'white',
            padding:20,
            borderRadius:10,
            shadowColor: "yellow",
            shadowOpacity:0.30,
            elevation:4
        },
        input:{
          borderWidth:1,
          borderColor: 'skyblue',
          width:300,
          marginBottom:15,
          fontSize:20
        }
    
    })
   
export default UpdateApi59; 