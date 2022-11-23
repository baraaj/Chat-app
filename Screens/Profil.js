import { View, Text,Image } from 'react-native'
import React from 'react'
import {useState,useEffect} from 'react'
import { StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import initfirebase from './../config/index';
import { TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function Profil() {
    const database = initfirebase.database();
    const [data,setdata]= useState([]);
    const storage = initfirebase.storage();
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [image, setImage] = useState(null);
    const [pseudo, setPseudo] = useState("");
    const imageToBlob = async (uri) => {
      const blob=await new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          reject(new TypeError("Network request Failed"));
        };
        xhr.responseType = "blob"; //arraybuffer
        xhr.open("GET", uri, true);
        xhr.send(null);

      });
  return blob;
}


    const uploadImage=async(uri)=>{
      //convert image to blob
      const blob=await imageToBlob(uri);
      //save blob to reference image
      //get url
    }
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

      
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Profil</Text>
      <Image source={image===null?require("../assets/profil.png"):{uri:image}}
      style={{
          width:130,
          height:130,
          borderRadius: 63,
          borderWidth: 4,
          borderColor: "white",
          marginBottom:10,
         alignSelf:'center',
          
          marginTop:20
          
      }}
      onPress={() => {pickImage();}}></Image>
      <TextInput placeholder="nom" style={styles.TextInput}></TextInput>
      <TextInput placeholder="prenom" style={styles.TextInput}></TextInput>
      <TextInput placeholder="pseudo" style={styles.TextInput}></TextInput>
      <TouchableOpacity style={styles.button}
       onPress={async() => {
        if (image != null) {
          const url = await uploadImage(image)

          const ref_profils = database.ref('profils');
          const key = ref_profils.push().key;
          ref_profils.child("profil"+key).set({
              nom: nom,
              prenom: prenom,
              pseudo: pseudo,
              url:url,

          }); 
      }
   
     
   
     
      
       
    }}>
        
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:18,color:'white'}}>Save</Text>

      </TouchableOpacity>
      useEffect(() => {
        ref_profils.on("value",(dataSnapshot)=>{
          let d = [];
          dataSnapshot.forEach((profile)=>{
              d.push(profile.val());
          });
          setdata(d);
      })
        
        return () => {
          ref_profils.off();
        };
      }, []); 
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
}

)
