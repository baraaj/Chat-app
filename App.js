import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.view2style}>
      <Text style={{color:"white",textAlign:"center",fontSize:32,fontWeight:"bold",marginBottom:10}}>Authentification</Text>
      <TextInput style={styles.TextInput} onChangeText={e=>{setEmail(e)}} placeholder='Username@site.com' keyboardType='email-address'></TextInput>
      <TextInput style={styles.TextInput} onChangeText={e=>{setPassword(e)}} placeholder='Password' keyboardType='default'secureTextEntry={true}></TextInput>
      {//<Button title="Validate"></Button>
      }
      <TouchableOpacity style={{
         width:"50%",
         borderRadius:5,
         backgroundColor:"#35b",
         height:40,
         width:100,
         justifyContent:"center",
         marginTop:10,
        
      }}>
      <Text onPress={()=>alert(email)} style={{textAlign:"center",fontWeight:"bold",fontSize:18,color:'white'}}>Validate</Text>
 
      </TouchableOpacity>
      <TouchableOpacity style={{
        width:"100%",
        marginRight:10,
        marginTop:10,
        marginBottom:10,
        alignItems:"flex-end",
      }}>
        <Text style={{color:"white"}}>Create new User</Text>

      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a0b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2style:{
    backgroundColor:"#0005",
    height:400,
    width:"90%",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
  },
  TextInput:{
    margin:10,
    color:"black",
    height:60,
    width:"80%",
    backgroundColor:"white",
    alignItems:"center",
    borderRadius:5,
   textAlign:"center",
  }
});
