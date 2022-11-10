import { View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Button, Image, ImageBackground, Animated } from 'react-native';
import TopMenuBar from '../TopMenuBar';
import { ProgressBar, Colors } from 'react-native-paper';
import BottomProgressBar from '../BottomProgressBar';
import Stars from '../Stars';
import FadeInView from '../animations/FadeInView';

export default function Welcome({ navigation, props }) {
  
  return (
    <View>
      <TopMenuBar {...{ navigation }} />
      <View style={styles.container}>
        <ImageBackground style={styles.bgimage} resizeMode="cover" source={require('../../assets/home-bg.jpg')}>
        <View style={styles.mainContent}>
          <Text style={[styles.paragraphBlack,{paddingTop:50}]}>
            WELCOME !!!
            {"\n"}
            PROGRAMM FTW CANDIDATE</Text>
          <Text style={styles.paragraphBlack}>YOUR RATING</Text>
          <Text style={styles.paragraphRed}>0.1</Text>
          <ProgressBar style={{ marginTop: 0, height: 15, width:280 }} progress={0.1} color="#05bafc" />
          <Text style={[styles.paragraphBlack,{marginBottom:30}]}>FROM ZILLION USERS</Text>
          </View>
        </ImageBackground>

               <TouchableOpacity
          onPress={() => navigation.navigate('ChooseRoadMap')}>
          <Image style={[styles.startBtn,{marginTop: 25}]} source={require("../../assets/icons/startBtn.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChooseRoadMap')}>
          <FadeInView>
      </FadeInView>
        </TouchableOpacity>
                <TouchableOpacity
          onPress={() => navigation.navigate('ChooseRoadMap')}>
               </TouchableOpacity>
        <BottomProgressBar {...{ navigation }} style={{marginBottom: -40}}/>
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
    height: 560,
  },
  mainContent:{
    position:'absolute',
     justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  bgimage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 350,
    height: 560,
    resizeMode: "stretch",
    left:0
  },
  clickHere: {
    width: 100,
    height: 80,
    resizeMode: "stretch",
    marginTop:30
  },
  startBtn: {
    width: 130,
    height: 130,
    resizeMode: "stretch",
  },

  paragraphBlack: {
    fontSize: 14,
    color: '#262626',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15
  },
  paragraphRed: {
    fontSize: 18,
    color: '#ee5200',
    fontWeight: 'bold',
  },
});
