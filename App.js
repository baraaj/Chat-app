import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.view2style}>
      <Text style={{color:"white",textAlign:"center",fontSize:32,fontWeight:"bold",margin:"20"}}>Authentification</Text>
      <TextInput style={styles.TextInput} placeholder='Username@site.com'></TextInput>
      <TextInput style={styles.TextInput} placeholder='Password'></TextInput>
      <Button title="Validate"></Button>
      <TouchableOpacity style={{
        width:"100%",
        marginRight:10,
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
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2style:{
    backgroundColor:"#0005",
    height:400,
    width:"90%",
    borderRadius:10,
    alignItems:"center"
  },
  TextInput:{
    margin:10,
    color:"black",
    height:80,
    width:"80%",
    backgroundColor:"white",
    alignItems:"center",
    borderRadius:5,
  }
});
