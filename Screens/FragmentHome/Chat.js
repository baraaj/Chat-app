import { View, Text, StyleSheet,TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
// import { Button } from "react-native-paper";

const Chat = (props) => {
  const [message, setMessage] = useState([
    { message: "Bonjour", from: "me" },
    { message: "Bonjour", from: "other" },
  ]);
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={message}
        style={{ width: "100%", height: "100%" }}
        renderItem={({ item }) => (
          <View style={styles.view}>
            <View style={{ alignItems: "flex-start", margin: 10 }}>
              {item.from === "other" ? (
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {item.message}
                </Text>
              ) : (
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    alignSelf: "flex-end",
                  }}
                >
                  {item.message}
                </Text>
              )}
            </View>
          </View>
        )}
      ></FlatList> */}
      <View style={styles.container}>
        <TextInput
          style={styles.TextInput}
          onChangeText={(e) => {
            setMessage(e);
          }}
          keyboardType="Write a message"
        ></TextInput>
        <TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18,
              color: "white",
            }}
          >
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDBB99",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    margin: 10,
    color: "black",
    height: 60,
    width: "80%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 5,
    textAlign: "center",
  },
});

export default Chat;