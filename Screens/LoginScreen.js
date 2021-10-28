import * as Google from "expo-google-app-auth";

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { Button } from "react-native-elements";
import Color from "../constant/Color";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import firebase from "firebase";

const LoginScreen = (props) => {
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.user.id
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = (googleUser) => {
    console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );
        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(function (result) {
            console.log("user signed in");
            if (result.additionalUserInfo.isNewUser) {
              firebase
                .database()
                .ref("/students/" + result.user.uid)
                .set({
                  gmail: result.user.email,
                  profile_picture: result.additionalUserInfo.profile.picture,

                  name:
                    result.additionalUserInfo.profile.given_name +
                    " " +
                    result.additionalUserInfo.profile.family_name,
                  created_at: Date.now(),
                })
                .then(function (snapshot) {
                  // console.log('Snapshot', snapshot);
                });
            } else {
              firebase
                .database()
                .ref("/students/" + result.user.uid)
                .update({
                  last_logged_in: Date.now(),
                });
            }
          })
          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      } else {
        console.log("User already signed-in Firebase.");
      }
    });
  };

  const [googleSubmitting, setGoogleSubmitting] = useState(false);

  const HandleGoogleSignin = () => {
    setGoogleSubmitting(true);
    const config = {
      androidClientId:
        "8665238609-6i72g2j2lbfj1f4q4edv1q9ur6rfqr7g.apps.googleusercontent.com",
      iosClientId:
        "8665238609-evcqo92gafmso45r0mrpam3neqe0udvv.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    };

    Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;
        if (type == "success") {
          onSignIn(result);
          const { email, name, photoUrl } = user;
          let ID = email.slice(email.indexOf("@"));
          let number = email.slice(0, email.indexOf("@"));

          console.log(ID);
          if (ID === "@ses.yu.edu.jo") {
            setTimeout(
              () =>
                props.navigation.navigate("Home", {
                  name1: name,
                  imgUrl: photoUrl,
                  email1: email,
                  gid: result.user.uid,
                }),
              100
            );
          } else {
            firebase
              .auth()
              .signOut()
              .then(() => {
                // Sign-out successful.
                console.log("Log out");
              });
            alert("This is not email of yu!!..Please try another email");
          }
        } else {
        }
        setGoogleSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        setGoogleSubmitting(false);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor={Color.acc}
      />
      <View style={{ flex: 9, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.logo}>Attendance</Text>
        <Text style={styles.logo}>App</Text>

        {!googleSubmitting && (
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={HandleGoogleSignin}
          >
            <Icon name="google" size={15} color="white" />
            <Text style={styles.loginText}>Continue With Google</Text>
            <Text></Text>
          </TouchableOpacity>
         
        )}
        {googleSubmitting && (
          <ActivityIndicator size="large" color={Color.main_color} />
        )}
      </View>
      <View style={{ flex: 1 }}>
      <View style={{justifyContent:'center',alignItems:'center',margin:5}} >
        <Text style={{ color: "#393E46", fontSize: 13 }}>V 1.0</Text>
        </View>
        <Text style={{ color: "#393E46", fontSize: 13 }}>جميع الحقوق محفوظة © SMADI 2021</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#222831",
    marginBottom: 10,
  },
  loginBtn: {
    flexDirection: "row",

    width: "80%",
    backgroundColor: "#00ADB5",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default LoginScreen;
