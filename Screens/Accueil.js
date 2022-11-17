import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';
import { StyleSheet, Text,TextInput } from 'react-native';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { TabActions } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import List from './List';
import Group from './Group';
import Profil from './Profil';

export default function Accueil() {
     
  const Tab = createMaterialBottomTabNavigator();
  return (
      /*  <View style={styles.container}>
      <StatusBar style="light" />
      <View>
      <Text style={{color:"white",textAlign:"center",fontSize:38,fontWeight:"bold",marginBottom:10}}>Accueil</Text>
      </View>
  </View>*/
  <Tab.Navigator>
  <Tab.Screen  name="list" component={List} ></Tab.Screen>
  <Tab.Screen name="group" component={Group}></Tab.Screen>
  <Tab.Screen name="profil" component={Profil}></Tab.Screen>
  </Tab.Navigator>
)
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#e4ccb3',
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