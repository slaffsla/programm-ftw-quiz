import * as React from "react";
import "../assets/i18n/i18n";
import { useTranslation } from "react-i18next";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Menu } from "react-native-paper";
const Separator = () => <View style={styles.separator} />;

const lngs = {
  en: { nativeName: "English" },
  ru: { nativeName: "Russian" },
};

export default function TopMenuBar({ navigation }) {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setLanguage] = React.useState("en");
  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.news}>
        <Text style={styles.news}>FTW PROGRAMM 4 FINDING JOBS</Text>
        <View style={styles.lng}>
          {Object.keys(lngs).map((lng) => (
            <Button
              type="submit"
              key={lng}
              style={{ fontSize: 10, color: "AAA" }}
              title={lng}
              onPress={() =>
                i18n.resolvedLanguage === "ru"
                  ? changeLanguage("en")
                  : changeLanguage("ru")
              }
              disabled={i18n.resolvedLanguage === lng}
            >
              {lngs[lng].nativeName}
              Change Lng
            </Button>
          ))}
        </View>
      </View>
      <Image
        style={styles.mojoAvatar}
        source={require("../assets/icons/mojoAvatar.png")}
      />
      <View style={[styles.row, { marginTop: 15 }]}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.tabs}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AboutPage")}>
          <Text style={styles.tabs}>ABOUT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ChooseRoadMap")}>
          <Text style={styles.tabs}>ROAD MAP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("HelpPage")}>
          <Text style={styles.tabs}>HELP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#02236c",
    paddingTop: 0,
    height: 110,
  },
  tabs: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fcfcfc",
    padding: 5,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 10,
  },
  mojoAvatar: {
    position: "absolute",
    right: 5,
    width: 20,
    height: 20,
    resizeMode: "stretch",
  },
  news: {
    fontSize: 13,
    flexDirection: "row",
    backgroundColor: "#010308",
    color: "#ffffff",
    textAlign: "left",
    paddingLeft: 5,
    fontWeight: "bold",
  },

  lng: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "right",
    marginLeft: 10,
    fontSize: 18,
    color: "#ffffff",
    textAlign: "right",
    paddingRight: 5,
    fontWeight: "bold",
    backgroundColor: "#010308",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
  },
});
