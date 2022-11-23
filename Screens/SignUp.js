import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import initfirebase from './../config/index';

export default function SignUp(props) {
    const auth = initfirebase.auth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>

            <StatusBar style="auto" />
            <View
                style={{
                    height:300,
                    width:"90%",
                    backgroundColor:"#0005",
                    borderRadius:10,
                    alignItems:"center",
                    justifyContent:"center",
                }}
            >
                <Text style={{fontSize:36,fontWeight:"bold",color:"white"}}>
                    Authentication
                </Text>
                <TextInput
                    style={styles.textinput}
                    keyboardType="email-address"
                    placeholder="mail@site.com"
                    onChangeText={(text) => setEmail(text)}

                ></TextInput>
                <TextInput
                    style={styles.textinput}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text)=>setPassword(text)}
                ></TextInput>
                <TextInput
                    style={styles.textinput}
                    placeholder="Repeat Password"
                    secureTextEntry={true}
                ></TextInput>
                <Button onPress={()=>{
                    auth.createUserWithEmailAndPassword(email,password)
                        .then(()=>{props.navigation.replace("Accueil")})
                        .catch((err)=>{
                            alert(err);
                        })
                }} title="Create New Account"></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textinput: {
        backgroundColor: "white",
        width: "90%",
        height: 40,
        textAlign: "center",
        borderRadius: 8,
        margin: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});