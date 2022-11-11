import { Text, View, StyleSheet, Image, Button, TextInput, TouchableOpacity,ImageBackground } from 'react-native';
import TopMenuBar from '../TopMenuBar';
import LoginConnect from '../loginconnect';

export default function Home({ navigation }) {
  return (
    <View>
      <TopMenuBar {...{ navigation }} />
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          WELCOME !!!
{"\n"}PROGRAMM FTW
          {"\n"}
          CANDIDATE!</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Welcome')}>
          <Image style={styles.startBtn} source={require("../../assets/icons/startBtn.png")} />
        </TouchableOpacity>


      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#18C5C5',
    height: 590
  },
  coverImage:{
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
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -25
  }
});
