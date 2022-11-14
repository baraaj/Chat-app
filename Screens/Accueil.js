import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function Accueil() {
     
 
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View>
      <Text style={{color:"white",textAlign:"center",fontSize:38,fontWeight:"bold",marginBottom:10}}>Accueil</Text>
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
    backgroundColor:"#0005",
    height:400,
    width:"90%",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
  }
});
