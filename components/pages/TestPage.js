import { Text, View, StyleSheet, Image, Button, TextInput ,TouchableOpacity} from 'react-native';
import TopMenuBar from '../TopMenuBar';
import LoginConnect from '../loginconnect';

export default function TestPage({ navigation }) {
  return (
     <View>

      <View style={styles.container}>
        <TouchableOpacity
            onPress={() => navigation.navigate('HomePage')}>
 <Image style={styles.startBtn} source={require("../../assets/icons/startBtn.png")} />
 </TouchableOpacity>
        <Text style={styles.paragraph}>
          TEST PAGE</Text>
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
  },
   startBtn: {
    width: 130,
    height: 130,
      resizeMode: "stretch",
  },
});
