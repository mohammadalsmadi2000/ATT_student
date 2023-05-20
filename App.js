import * as Google from "expo-google-app-auth";

import {
  Alert,
  Button,
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";


import AppIntroSlider from "react-native-app-intro-slider";
import AppLoading from "expo-app-loading";
import AppStore from "./store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import { Provider } from "mobx";
import QrComponent from "./Screens/QrScreen";
import QrScreenNav from "./navigation/ScreenAppNavigat";
import { StoreProvider } from "./store/StoreContext";
import { createSwitchNavigator } from "react-navigation";
import firebase from "firebase";
import { firebaseConfig } from "./confige";

const slides = [
  {
    key: 1,
    title: "Sign In",
    text: "Log in with your University Account, You don't need to add any information",
    image: require("./assets/1.png"),
    backgroundColor: "#B8B5FF",
  },
  {
    key: 2,
    title: "QR Code",
    text: "Scan the QR code when it appears in the lecture",
    image: require("./assets/2.png"),
    backgroundColor: "#B8B5FF",
  },
  {
    key: 3,
    title: "Done",
    text: "If the QR code matches , The attendance is recorded directly",
    image: require("./assets/3.png"),
    backgroundColor: "#B8B5FF",
  },
];

firebase.initializeApp(firebaseConfig);

export default function App() {
  const [slide, setSlide] = useState(false);
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: item.backgroundColor,
        }}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setSlide(true);
  };
  if (slide) {
    return (
      <StoreProvider>
        <QrScreenNav />
      </StoreProvider>
    );
  } else {
    return (
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={this._onDone}
      />
    );
  }
}
const AppSwitchNavigator = createSwitchNavigator({
  welcome: { screen: LoginScreen },
  dashboard: { screen: Home },
});
const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 260,
    height: 260,
  },
  text: {
    color: "#fff",
    backgroundColor: "transparent",
    textAlign: "center",
    paddingHorizontal: 16,
    marginTop:10,
    fontWeight:"bold"
  },
  title: {
    fontSize: 22,
    color: "black",
    backgroundColor: "transparent",
    textAlign: "center",
    marginBottom: 16,
    fontWeight:'bold'
  },
});
