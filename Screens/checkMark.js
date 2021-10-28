import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";

const image = { uri: "https://reactjs.org/logo-og.png" };

const checkMark = (props) => (
  <View style={styles.container}>
    <ImageBackground
      source={{
        uri: "https://image.freepik.com/free-photo/hand-holding-check-symbol_53876-63808.jpg",
      }}
      resizeMode="cover"
      style={styles.image}
    >
      <Text style={styles.text}>It has been confirmed</Text>
      <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          <Text></Text>
          <Text style={styles.loginText}>Done</Text>
          <Text></Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  loginBtn: {
    flexDirection: "row",

    width: "80%",
    backgroundColor: "#4E9F3D",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default checkMark;
