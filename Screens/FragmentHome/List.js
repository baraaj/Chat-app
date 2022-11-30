import { View, Text,StyleSheet ,Button,FlatList,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import {useEffect,useState} from 'react'
import initfirebase from '../../config/index';
import { Dialog } from 'react-native-paper';
export default function List(props,navigation) {
 /* const data=[
    {nom:"Baraa",
  prenom:"Jridi",
pseudo:"bj"},
{nom:"emilie",
prenom:"Jean",
pseudo:"ej"},
  ]*/
  const database = initfirebase.database();
  const ref_profils=database.ref("profils");
  const [selectedUser, setSelectedUser] = useState({});
  const [data,setdata]= useState([]);
  const [visible,setVisible]=useState(false);
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
  return (
    <View style={styles.container}>
        <Text style={{
            color:"#47a",
            fontSize:34,
            fontWeight:"bold"
        }}
        >Liste des profiles </Text>
        <FlatList data={data}
                  renderItem={({item})=>{
                      return ( 
                       <View style={styles.ViewItem}>
                         <TouchableOpacity
                          onPress={() => {
                            setSelectedUser(item);
                            setVisible(true);
                          }}
                         >
                          <Image style={{height:60,width:60,resizeMode:"contain"}}
                        source={ item.url===null? require("../../assets/profil.png") : {uri:item.url}}></Image>
                       </TouchableOpacity>
                          <View>
                          <TouchableOpacity style={{fontSize:22,fontWeight:"bold"}}>
                           <Text> {item.pseudo}</Text>
                            </TouchableOpacity>
                          <Text>{item.nom}</Text>
                          <Text>{item.prenom}</Text>
                          </View>
                        </View> 
                          );
                      
                      
                  }}
        >
        </FlatList>
        <Dialog
        style={{
          backgroundColor: "white",
          borderRadius: 8,
        }}
        visible={visible}
        onDismiss={() => setVisible(false)}
      >
        <Dialog.Title>Les informations de l'utilisateur</Dialog.Title>
        <Dialog.Content>
          <Image
            style={{ width: 70, height: 70 }}
            source={
              selectedUser.url === undefined
                ? require("../../assets/profil.png")
                : { uri: selectedUser.url }
            }
            resizeMode="center"
          ></Image>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            {selectedUser.nom}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            {selectedUser.pseudo}
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <TouchableOpacity style={styles.button} onPress={() => setVisible(false)}><Text style={{textAlign:"center",fontWeight:"bold",fontSize:18,color:'white'}}>OK</Text></TouchableOpacity>
        </Dialog.Actions>
      </Dialog>
    </View>
)
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"flex-start",
    

  },
  ViewItem:{
    height:300,
    width:200,
    borderColor:"gray",
    borderWidth:1,
    margin:5,
    
    justifyContent:"center",
    borderRadius:7,
    alignItems:"center",
     
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
  }
})