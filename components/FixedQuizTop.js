import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  InteractionManager,
} from "react-native";

import React, { useState, useEffect, useCallback, navigation } from "react";
const FixedQuizTop = ({ lang }) => {
  function startTimer() {
    timer = setInterval(() => {
      if (Math.floor(seconds) > 5) {
        setMinutes((old) => (old += 1));
        setSeconds(0);
      } else {
        setSeconds((old) => (old += 1));
      }
    }, 1000);
  }
  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <View style={styles.topBarItems}>
        {lang === "REACT" && (
          <Image
            style={styles.reactImage}
            source={require("../assets/icons/reactLogo.png")}
          />
        )}
        {lang === "ANGULAR" && (
          <Image
            style={styles.reactImage}
            source={require("../assets/icons/angularLogo.png")}
          />
        )}
        {lang === "HTML5" && (
          <Image
            style={styles.reactImage}
            source={require("../assets/icons/jsLogo3.png")}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topBarItems: {
    flexDirection: "row",
    backgroundColor: "#e0eaff",
    resizeMode: "stretch",
  },

  rageImage: {
    width: 60,
    height: 60,
  },
  pinkClock: {
    width: 60,
    height: 60,
  },
  reactImage: {
    marginTop: 10,
    width: 60,
    height: 60,
  },
});

export default FixedQuizTop;
