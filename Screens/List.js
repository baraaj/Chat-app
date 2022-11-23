import { View, Text,StyleSheet ,FlatList,Image} from 'react-native'
import React from 'react'

export default function List(props) {
  const data=[
    {nom:"Baraa",
  prenom:"Jridi",
pseudo:"bj"}
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
                      return (<View style={styles.ViewItem}>
                       
                        <Image style={{height:60,width:60,resizeMode:"contain"}}
                        source={require("../assets/profil.png")}></Image>
                          <Text onPress={()=>{props.navigation.navigate("Chat")}} 
                          style={{fontSize:22,fontWeight:"bold"}}>{item.pseudo}</Text>
                          <Text>{item.nom}</Text>;
                          <Text>{item.prenom}</Text>;
                           
                            </View> );
                      
                      
                  }}
        style={{ width:"100%",height:"100%"}}
>
        </FlatList>
    </View>
)
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"flex-start"
  },
  ViewItem:{
    height:65,
    width:"90%",
    borderColor:"gray",
    borderWidth:1,
    margin:5,
    borderRadius:7,
    alignItems:"center",
    justifyContent:"flex-start",
  }
})