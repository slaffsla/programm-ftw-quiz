import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import TopMenuBar from '../TopMenuBar';

export default function ChooseRoadMap({ navigation }) {
  return (
    <View>
      <TopMenuBar {...{ navigation }} />
      <View style={styles.container}>
        <Text style={styles.paragraph}>CHOOSE INTERVIEW TYPE</Text>
        <View>
          <View style={styles.categories}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ReactPage')}>
              <Image style={styles.button} source={require("../../assets/icons/reactLogo.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('AngularPage')}>
              <Image style={styles.button} source={require("../../assets/icons/angularLogo.png")} />
            </TouchableOpacity>
            <View   style={[styles.button, { }]} >
              <TouchableOpacity
              onPress={() => navigation.navigate('HtmlPage')}>
              <Image style={styles.button} source={require("../../assets/icons/jsLogo3.png")} />
            </TouchableOpacity>
              </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
     justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#18C5C5',
    height: 590,
  },
  button: {
    width: 120,
    height: 120,
    marginTop: 10,
         resizeMode: "stretch",
  },
  categories: {
    textAlign: 'center',
    marginBottom: 150,
  },
   paragraph: {
    margin: 24,
    fontSize: 14,
    color: "#001a00",
    fontWeight: 'bold',
  }
});
