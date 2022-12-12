import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import TopMenuBar from "../TopMenuBar";
import LoginConnect from "../loginconnect";

export default function HomePage({ navigation }) {
  return (
    <View>
      <TopMenuBar {...{ navigation }} />
      <View style={styles.container}>
        <Text style={styles.paragraph}>HOME PAGE</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#18C5C5",
    marginTop: 0,
    height: 590,
  },
});
