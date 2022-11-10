
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const Stars = ({ navigation, lang }) => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.paragraphBlack}>?HOW DO YOU FEEL TODAY</Text>
        <View style={styles.smallStars}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Quiz', { lang: lang, difficulty: 'NOOB' })}>
            <Image style={styles.smallStar} source={require("../assets/icons/s1.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Quiz', { lang: lang, difficulty: 'MIDDLE' })}>
            <Image style={styles.smallStar} source={require("../assets/icons/s2.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Quiz', { lang: lang, difficulty: 'SINIOR' })}>
            <Image style={styles.smallStar} source={require("../assets/icons/s3.png")} />
          </TouchableOpacity>
        </View>
        <Text style={styles.paragraphBlack}>
          CLICK AND GET ADJUSTED DIFFICULTY
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#18C5C5',
  },
  smallStars: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    resizeMode: "stretch",
  },
  smallStar: {
    height: 60,
    width: 60,
    resizeMode: "stretch",
  },
  paragraphBlack: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    color: '#262626',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Stars;
