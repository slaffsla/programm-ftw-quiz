import { Text, View, StyleSheet, Image, Button, TextInput } from 'react-native';
import TopMenuBar from '../TopMenuBar';
import LoginConnect from '../loginconnect';

export default function Help({ navigation }) {
  return (
     <View>
      <TopMenuBar {...{ navigation }} />
      <View style={styles.container}>

        <Text style={styles.paragraph}>
          HELP
          {"\n"}
          DONATE 2 PROGRAMM FTW TEAM</Text>
        <Text style={styles.paragraph}>
          AND MY Dear Dealer</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#18C5C5',
    marginTop: 0,
    height: 590,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    color: "##001a00",
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
