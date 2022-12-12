import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const RageBar = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
});

export default RageBar;
