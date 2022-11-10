import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Menu } from 'react-native-paper';
const Separator = () => (
  <View style={styles.separator} />
);

export default function TopMenuBar({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.news}>
        <Text style={styles.news}>FTW PROGRAMM 4 FINDING JOBS</Text>
      </View>
      <Image
        style={styles.mojoAvatar}
        source={require('../assets/icons/mojoAvatar.png')}
      />
      <View style={[styles.row, { marginTop: 15 }]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.tabs}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AboutPage')}
        >
          <Text style={styles.tabs}>ABOUT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChooseRoadMap')}
        >
          <Text style={styles.tabs}>ROAD MAP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('HelpPage')}
        >
          <Text style={styles.tabs}>HELP</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#02236c',
    paddingTop: 0,
    height: 110
  },
  tabs: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fcfcfc',
    padding: 5
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  mojoAvatar: {
    position: 'absolute',
    right: 5,
    width: 90,
    height: 90,
    resizeMode: "stretch",
  },
  news: {
    fontSize: 13,
    flexDirection: 'row',
    backgroundColor: '#010308',
    color: '#ffffff',
    textAlign: 'left',
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373'
  }
});
