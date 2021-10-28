import "intl";
import "intl/locale-data/jsonp/en";

import {
  Alert,
  Button,
  Dimensions,
  Linking,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Popup, Root } from 'react-native-popup-confirm-toast'
import React, { useEffect, useState } from "react";

import { BarCodeScanner } from "expo-barcode-scanner";
import Color from "../constant/Color";
import RNFlash from "react-native-flash";
import { StatusBar } from "expo-status-bar";
import { WRootToastApp } from "react-native-smart-tip";
import firebase from "firebase";
import { useAppStore } from "../store/StoreContext";

const { width } = Dimensions.get("window");

const QrComponent = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [numberScan, setNumberScan] = useState(1);
  const [currentDate, setCurrentDate] = useState("");
  let Xmas95 = new Date();
  let weekday = Xmas95.getDay();
  let options = { weekday: "long" };

  let day = new Intl.DateTimeFormat("en-US", options).format(Xmas95);
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date +
        "/" +
        month +
        "/" +
        year +
        " " +
        hours +
        ":" +
        min +
        ":" +
        sec +
        "  " +
        day
    );
  }, []);
  const qrStore = useAppStore();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

const pop=()=>{
  return(
   
      Popup.show({
        type: 'success',
        title: 'Dikkat!',
        textBody: 'Mutlak özgürlük, kendi başına hiçbir anlam ifade etmez. ',
        buttonText: 'Tamam',
        callback: () => Popup.hide()
      })
    
  )
}

  const handleBarCodeScanned = ({ type, data }) => {
    
    const words = data.split("|");
    let lecture = words[1];
    let subject=words[0];
    let firstTime=words[2];
    let lastTime=words[3];

    setScanned(true);
    
    let miniData = `${data}`;
    if (words.length!==4) {
      setScanned(false);
      props.navigation.navigate("wrong")

    } else {
      setNumberScan(numberScan + 1);
      firebase
        .database()
        .ref(`${subject}/`)
        .child("/Student_att/")
        .child(`/${lecture}/` + qrStore.name)
        .set({
          name: qrStore.name,
          number: qrStore.number,
          scans: numberScan,
          Date: currentDate,
          
        }).then(()=>{ Popup.show({
          type: 'success',
          title: 'Dikkat!',
          textBody: 'Mutlak özgürlük, kendi başına hiçbir anlam ifade etmez. ',
          buttonText: 'Tamam',
          callback: () => Popup.hide()
        })});
        setTimeout(() => {
          setScanned(false);
          
        }, 60000);
        props.navigation.navigate("checkMark")
    }
    
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor={Color.acc}
      />
  
       
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, styles.container]}
      >
      
        <View style={styles.layerTop} />
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom} />
        
      </BarCodeScanner>
      
    </View>
  );
};
const opacity = "rgba(0, 0, 0, .6)";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Color.acc,
  },
  layerTop: {
    flex: 1,
    backgroundColor: opacity,
  },
  layerCenter: {
    flex: 1,
    flexDirection: "row",
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity,
  },
  focused: {
    flex: 10,
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity,
  },
  layerBottom: {
    flex: 1,
    backgroundColor: opacity,
  },
});

export default QrComponent;
