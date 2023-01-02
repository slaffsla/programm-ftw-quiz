import * as React from "react";
import TopMenuBar from "../TopMenuBar";
import i18n from "../../assets/i18n/i18n";
import { useTranslation } from "react-i18next";
console.table(i18n);
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Pressable,
} from "react-native";
import LoginConnect from "../loginconnect";

export default function Home({ navigation }) {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setLanguage] = React.useState("en");

  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch((err) => console.log(err));
  };
  return (
    <View>
      <TopMenuBar {...{ navigation }} />
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          WELCOME !!!
          {"\n"}
          {t("hello")} {"\n"}PROGRAMM FTW
          {"\n"}
          CANDIDATE!
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
          <Image
            style={styles.startBtn}
            source={require("../../assets/icons/startBtn.png")}
          />
        </TouchableOpacity>

        {/*  <Pressable
          onPress={() => changeLanguage("en")}
          style={{
            padding: 20,
          }}
        >
          <Text>Select English</Text>
        </Pressable>
        <Pressable
          onPress={() => changeLanguage("ru")}
          style={{
            padding: 20,
          }}
        >
          <Text>Select Russian</Text>
        </Pressable> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#18C5C5",
    height: 590,
  },
  coverImage: {
    width: 300,
    height: 200,
    resizeMode: "stretch",
  },
  startBtn: {
    width: 130,
    height: 130,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    color: "#001a00",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -25,
  },
});
