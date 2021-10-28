import "intl";
import "intl/locale-data/jsonp/en";

import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Paragraph, Title } from "react-native-paper";
import { Popup, Root, Toast } from "react-native-popup-confirm-toast";
import React, { useEffect, useState } from "react";

import { Button } from "react-native-elements";
import Card from "../components/Card";
import CategoryCard from "react-native-category-card";
import Color from "../constant/Color";
import Icon from "react-native-vector-icons/FontAwesome";
import { ListItem } from "react-native-elements";
import LoadingScreen from "./LoadingScreen";
import { SafeAreaView } from "react-navigation";
import { SliderBox } from "react-native-image-slider-box";
import { StatusBar } from "expo-status-bar";
import TextAnimator from "../components/TextAnimator";
import firebase from "firebase";
import { useAppStore } from "../store/StoreContext";

const pop = () => {
  return Alert.alert("Alert Title", "My Alert Msg", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
};
const { width } = Dimensions.get("screen");
const Home = ({ route, navigation }) => {
  let Xmas95 = new Date();
  let weekday = Xmas95.getDay();
  let options = { weekday: "long" };
  const appStore = useAppStore();
  const [mo, setMo] = useState(appStore.qrCode);
  const name = navigation.getParam("name1");
  const photo = navigation.getParam("imgUrl");
  const email = navigation.getParam("email1");
  const gid = navigation.getParam("gid");
  let ID = email.slice(0, email.indexOf("@"));
  console.log(gid);
  appStore.addNumberAndName(ID, name, gid);

  console.log(appStore.number + " " + appStore.name + " " + appStore.uid);
  const [imageSlide, setImageSlide] = useState([
    "https://scontent.famm10-1.fna.fbcdn.net/v/t1.6435-9/p180x540/247410270_101634128985665_6622373762125160962_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=vJ8deMzGfS0AX9wY1jD&_nc_ht=scontent.famm10-1.fna&oh=5c1d811f34624af1f7122cf771bc031e&oe=619A1EB5",
    "https://scontent.famm10-1.fna.fbcdn.net/v/t1.6435-9/246123700_101634502318961_2766727555739696727_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Jsu8YoERffkAX_KJhzk&tn=JaMzYKmlwL5X0qE0&_nc_ht=scontent.famm10-1.fna&oh=f20fffa43d0df0724059cffd65dd4348&oe=619897CF",
    "https://www.hijjawi.org/sites/default/files/2019-04/slider2_0.jpg",
    "https://www.yu.edu.jo/images/YUNN/news/bawabeh.jpg",
  ]);
  let day = new Intl.DateTimeFormat("en-US", options).format(Xmas95);
  const pushData = () => {
    firebase
      .database()
      .ref("/Att/" + name)
      .set({
        gmail: email,
        profile_picture: photo,
        first_name: name,

        created_at: Date.now(),
      })
      .then(function (snapshot) {
        // console.log('Snapshot', snapshot);
      });
  };

  const updateData = () => {
    firebase
      .database()
      .ref(`Att/`)
      .child("1Mohammad Hasan Tu'Meh Al-Smadi")
      .on("value", function (snapshot) {
        console.log(snapshot.val());
        setMo(snapshot.val().gmail);
      });
  };

  console.log(appStore.qrCode);
  if (appStore.qrCode === "AI APP") {
    setMo(appStore.qrCode);
  }
  const _onFinish = () => {
    // Alert.alert('Animation', 'It is done!');
  };
  const ListOptions = () => {
    const optionsList = [
      {
        title: "react",
        img: "https://www.hijjawi.org/sites/default/files/2019-04/slider2_0.jpg",
      },
      {
        title: "react",
        img: "https://www.hijjawi.org/sites/default/files/2019-04/slider2_0.jpg",
      },
    ];
    return (
      <View style={styles.optionsList}>
        {optionsList.map((options, index) => (
          <View style={styles.optionsCard} key={index}>
            <Image
              source={{ uri: options.img }}
              style={styles.optionsImageCard}
            />
            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
              {options.title}
            </Text>
          </View>
        ))}
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 5,
        backgroundColor: Color.acc,
      }}
    >
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor={Color.acc}
      />
      <View style={styles.header}>
        <View>
          <Text style={{ color: "grey" }}>University</Text>
          <Text style={{ color: "#000" }}>Yarmouk</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            Alert.alert("Student Info", `Name:\n${name}\n\nID\n:${ID}`, [
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ]);
          }}
        >
          <Image source={{ uri: photo }} style={styles.image} />
        </TouchableWithoutFeedback>
        <Button
          title="Log Out"
          type="outline"
          style={{ backgroundColor: Color.main_color, marginTop: 10 }}
          onPress={() =>
            firebase
              .auth()
              .signOut()
              .then(() => {
                // Sign-out successful.
                console.log("Log out");
                appStore.qrCode = "";
                appStore.Lecture = "";
                setMo("");
                navigation.navigate("logInScreen");
              })
              .catch((error) => {
                // An error happened.
                console.warn();
              })
          }
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ marginBottom: 8 }}>
          <SliderBox
            images={imageSlide}
            sliderBoxHeight={200}
            onCurrentImagePressed={(index) =>
              console.warn(`image ${index} pressed`)
            }
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={"resize"}
            resizeMode={"cover"}
            paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 10,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,
              marginBottom: 5,
              backgroundColor: "rgba(128, 128, 128, 0.92)",
            }}
            ImageComponentStyle={{
              borderRadius: 15,
              width: "97%",
              marginTop: 5,
            }}
            imageLoadingColor="#2196F3"
          />
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              navigation.navigate("QR");
            }}
          >
            <Icon name="qrcode" size={15} color="white" />
            <Text style={styles.loginText}>Record attendance</Text>
            <Icon name="arrow-right" size={15} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBtnEx}
            onPress={() => {
              navigation.navigate("platforms");
            }}
          >
            <Icon name="book" size={15} color="#00ADB5" />
            <Text style={styles.loginTextEx}>
              Supporting companies PlatForms
            </Text>
            <Text></Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 5 }}>
          <ScrollView
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ flexDirection: "row" }}>
              <Card
                content="Hijjawi Faculty for Engineering Technology was founded in 1984 through a generous donation from the Scientific Foundation of Hisham Adeeb Hijjawi (SFOHAH) with the aim of graduating engineers with scientific knowledge and high practical skills in the areas of engineering and information technology."
                name="Hijjawi Faculty"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvAs9XMMInDyth4iqQhN8TtkfdI_u9eN7fQ&usqp=CAU"
              />
              <Card
                content="The faculty of science strives to   maintain top level research and teaching standards  in all its departments. The faculty fulfils its national obligation to general education providing extensive scientific instruction."
                name="Faculty of Science"
                image="https://i.ytimg.com/vi/USVdMbIX7GE/maxresdefault.jpg"
              />
            </View>
          </ScrollView>
        </View>
        <View style={{ alignItems: "center", marginBottom: 5 }}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.facebook.com/mohammad.smadi.7140/");
            }}
          >
            <Text style={{ color: "#444444" }}>📞 Contact us for help 📞</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
Home.navigationOptions = (navigationData) => {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",

    backgroundColor: Color.acc,
    padding: 2,
  },
  containerStyle: {},
  textStyle: {
    color: "#fb5b5a",
    fontSize: 20,

    marginBottom: 14,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.main_color,
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: "#C0C0C0",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sortBtn: {
    backgroundColor: Color.primary,
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  optionsList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsImageCard: {
    height: 140,
    borderRadius: 10,
    width: "100%",
  },
  loginBtn: {
    flexDirection: "row",

    width: "40%",
    backgroundColor: "#00ADB5",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 5,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
  loginBtn: {
    flexDirection: "row",

    width: "80%",
    backgroundColor: "#00ADB5",
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
  loginBtnEx: {
    flexDirection: "row",
    borderWidth: 1,
    width: "80%",
    backgroundColor: "#EEEEEE",
    borderColor: "#00ADB5",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 10,
  },
  loginTextEx: {
    color: "#00ADB5",
    fontWeight: "bold",
  },
});

export default Home;
