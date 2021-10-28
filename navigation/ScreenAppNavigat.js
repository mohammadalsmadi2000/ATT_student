import { Button, Platform } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Color from "../constant/Color";
import HomeScreen from "../Screens/HomeScreen";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LoadingScreen from "../Screens/LoadingScreen";
import LoginScreen from "../Screens/LoginScreen";
import PlatForms from "../Screens/PlatForms";
import Playground from "../Screens/PlayGround";
import QrScreen from "../Screens/QrScreen";
import React from "react";
import SIS from "../Screens/SIS";
import SplashScreen from "../Screens/SplashScreen";
import checkMark from '../Screens/checkMark';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import firebase from "firebase";
import wrongCheckMark from '../Screens/wrongCheckMark';

const QrScreenNav = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Color.main_color,
      },
      headerTintColor: Color.acc,
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleStyle: { alignSelf: "center" },
      headerShown:false
    },
    
  },
  Log: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Home",
      headerShown: false, //this will hide the header
    },
  },
  loading:LoadingScreen,
  Play:{screen:Playground,
  navigationOptions:{
    title: "9afi",
      headerShown:false,
  }},
  SIS:{screen:SIS,
    navigationOptions:{
      title: "9afi",
        headerShown:false,
    }},

    checkMark:{screen:checkMark,
      navigationOptions:{
        title: "9afi",
          headerShown:false,
      }},
      wrong:{screen:wrongCheckMark,
        navigationOptions:{
          title: "9afi",
            headerShown:false,
        }},
        platforms:PlatForms
});

const QRScreenStack=createStackNavigator({
  
  qrScreen:QrScreen,
  loading:LoadingScreen,
  
})

const QrFavTab = createBottomTabNavigator(
  {
    Home: {
      screen: QrScreenNav,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="home" size={24} color={tabInfo.tintColor} />;
        },
      },
    },
    
    QR: {
      screen: QRScreenStack,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="qr-code-sharp"
              size={24}
              color={tabInfo.tintColor}
            />
          );
        },
        title: "QR Code",
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Color.main_color,
    },
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  welcome: { screen: LoginScreen },
  dashboard: { screen: QrFavTab },
  LogIn: createStackNavigator({
    logInScreen: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    QR:QrScreen
  }),
});

export default createAppContainer(AppSwitchNavigator);
