import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ProgressBar, Colors } from 'react-native-paper';

const Separator = () => (
  <View style={styles.separator} />
);

export default function BottomProgressBar({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Image style={styles.catAvatar} source={require("../assets/cats/whiteAvatar.png")} />
          <Text style={styles.text}>NOOB</Text>
        </View>
        <View style={styles.cell}>
          <Image style={styles.catAvatar} source={require("../assets/cats/MuskaAvatar.png")} />
          <Text style={styles.text}>MIDDLE</Text>
        </View>
        <View style={styles.cell}>
          <Image style={styles.catAvatar} source={require("../assets/cats/blackCatAvatar.png")} />
          <Text style={styles.text}>SINIOR</Text>
        </View>
      </View>
      <ProgressBar style={{ marginTop: 0, height: 15, width: 280 }} progress={0.3} color="#b8ecff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 100,
    flex: 1
  },
  cell: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  catAvatar: {
    width: 60,
    height: 60,
    resizeMode: "stretch",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
  }
});
