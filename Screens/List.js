import { View, Text,StyleSheet ,FlatList,Image} from 'react-native'
import React from 'react'

export default function List(props) {
  const data=[
    {nom:"Baraa",
  prenom:"Jridi",
pseudo:"bj"},
{nom:"emilie",
prenom:"Jean",
pseudo:"ej"},
  ]
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
                        <Image style={{height:60,width:60,resizeMode:"contain"}}
                        source={require("../assets/profil.png")}></Image>
                          <Text onPress={()=>{props.navigation.navigate("Chat")}} 
                          style={{fontSize:22,fontWeight:"bold"}}>{item.pseudo}</Text>
                          <Text>{item.nom}</Text>
                          <Text>{item.prenom}</Text>
                           
                        </View> 
                          );
                      
                      
                  }}
        >
        </FlatList>
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
     
  }
})