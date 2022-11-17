import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import initfirebase from './../config/index';
import Accueil from './Accueil';

export default function SignUp(props) {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[password2,setPassword2]=useState("");
  const auth = initfirebase.auth();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.view2style}>
      <Text style={{color:"white",
                    textAlign:"center",
                    fontSize:32,
                    fontWeight:"bold",
                    marginBottom:20,
                    }}>Sign Up</Text>
       <TextInput style={styles.TextInput} 
                  onChangeText={e=>{setEmail(e)}} 
                  placeholder='Username@site.com' 
                  keyboardType='email-address'></TextInput>
      <TextInput style={styles.TextInput} 
                 onChangeText={e=>{setPassword(e)}} 
                 placeholder='Password' 
                 keyboardType='default'
                 secureTextEntry={true}></TextInput> 
    <TextInput style={styles.TextInput} 
                 onChangeText={e=>{setPassword2(e)}} 
                 placeholder='Confirm Password' 
                 keyboardType='default'
                 secureTextEntry={true}></TextInput>
                  
      {//<Button title="Validate"></Button>
      }
      <TouchableOpacity 
      onPress={() => {
        if((email.length>0 && email.includes("@")))
             if(password.length>0&& (password===password2)&&(password.length>5))
             {
                auth.createUserWithEmailAndPassword(email,password)
                .then(()=>{
                    props.navigation.replace("Accueil");
                }).catch((erreur)=>{
                    alert(erreur)
                });


             }else{
                alert("verifiez vos donnée")
             }
       
       }}
      style={{
         width:"50%",
         borderRadius:5,
         backgroundColor:"#8ac6d1",
         height:40,
         width:100,
         justifyContent:"center",
         marginTop:10,}}
       
      >
          <Text  style={{textAlign:"center",fontWeight:"bold",fontSize:18,color:'white'}} >Submit</Text>
        

      </TouchableOpacity>
      
     

    
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#204969',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2style:{
    backgroundColor:"#b9a795",
    height:400,
    width:"90%",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
  },
  TextInput:{
    margin:10,
    color:"black",
    height:50,
    width:"80%",
    backgroundColor:"white",
    alignItems:"center",
    borderRadius:5,
   textAlign:"center",
  }
});
