import { View, Text,Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import initfirebase from './../config/index';
import { TouchableOpacity } from 'react-native';

export default function Profil() {
    const database = initfirebase.database();
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Profil</Text>
      <Image source={require("../assets/profil.png")}
      style={{
          width:130,
          height:130,
          borderRadius: 63,
          borderWidth: 4,
          borderColor: "white",
          marginBottom:10,
         alignSelf:'center',
          
          marginTop:20
          
      }}></Image>
      <TextInput placeholder="nom" style={styles.TextInput}></TextInput>
      <TextInput placeholder="prenom" style={styles.TextInput}></TextInput>
      <TextInput placeholder="pseudo" style={styles.TextInput}></TextInput>
      <TouchableOpacity style={styles.button}
       onPress={()=>{
        database.ref("profils").child("profil").set({
            nom:"nom",
            prenom:"ppp",
            pseudo:"sss",
        });
    }}>
        
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:18,color:'white'}}>Save</Text>

      </TouchableOpacity>
      {/* <Button style={styles.button}
      onPress={()=>{
          database.ref("profils").child("profil").set({
              nom:"nom",
              prenom:"ppp",
              pseudo:"sss",
          });
      }}
      title="Save"></Button> */}
    </View>
  )
}

const styles = StyleSheet.create({
    TextInput:{
        textAlign:"center",
        borderRadius:5 ,
        borderTopEndRadius:5,
        borderTopStartRadius:5,
        marginTop:20,
        width:250,
        alignSelf:"center"
    },
    titre:{
       fontSize:34,
       fontWeight:"bold",
       fontStyle:'italic',
       color:"#a03",
    },
    container:{
         flex:1,
         backgroundColor:'#DBD3D8',
        // alignItems:"center",
         justifyContent:'flex-start',
        

    },
    button: {
        width:"50%",
         borderRadius:5,
         backgroundColor:"#e38b73",
         height:40,
         width:100,
         justifyContent:"center",
         marginTop:80,
         alignSelf:"center"
      },
})