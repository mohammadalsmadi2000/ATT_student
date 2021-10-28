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
  
  const wrongCheckMark = (props) => (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://image.freepik.com/free-photo/hand-holding-multiplication-symbol_53876-63751.jpg",
        }}
        resizeMode="cover"
        style={styles.image}
      >
      <View style={{flex:4}} ><Text style={styles.text}>Attendance registration failed...try again</Text></View>
        
        <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
        <View style={{flex:1}} ></View>
        <View
          style={{ flex: 1,flexDirection:'row', justifyContent: "flex-start", alignItems:"stretch",paddingHorizontal:15}}
        >
          <TouchableOpacity
            style={{...styles.loginBtn,backgroundColor:"#4E9F3D"}}
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          >
            <Text></Text>
            <Text style={styles.loginText}>Home</Text>
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              props.navigation.navigate("QR");
            }}
          >
            <Text></Text>
            <Text style={styles.loginText}>Try Again</Text>
            <Text></Text>
          </TouchableOpacity>
        </View>
          
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
      fontSize: 18,
      lineHeight: 64,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#FF0000",
    },
    loginBtn: {
      flexDirection: "row",
  
      width: "40%",
      backgroundColor: "#FF0000",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "space-around",
      marginTop: 10,
      marginBottom: 10,
      marginHorizontal:10
    },
    loginText: {
      color: "white",
      fontWeight: "bold",
    },
  });
  
  export default wrongCheckMark;
  