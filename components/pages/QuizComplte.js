import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import TopMenuBar from '../TopMenuBar';
import { ProgressBar, Colors } from 'react-native-paper';
export default function QuizComplete({ navigation, calculatedScore }) {


  return (
    <View>
      <TopMenuBar {...{ navigation }} />
      <View style={styles.container}>
         <Text style={styles.paragraph}>IT WAS PLEASEURE ...</Text>
  <Image style={styles.endImage} source={require("../../assets/callback.jpg")} />
          <Text style={styles.paragraph}>WE WILL CALL YOU ...</Text>
        <Text style={styles.paragraph}>{calculatedScore} / 10</Text>
        <ProgressBar style={{ marginTop: 0, height: 15, width: 270, marginLeft: 25 }} progress={0.3} color="#ff5800" />
        <View style={styles.timeView}>
                <Image style={styles.pinkClock} source={require("../../assets/icons/clock.png")} /><Text style={styles.paragraph}>
                02:01:0789 sec</Text>
                </View>
        <ProgressBar style={{ marginTop: 0, height: 15, width: 270, marginLeft: 25 }} progress={0.3} color="#ff4100" />
        <View>
        <View style={styles.shareRatePanel}>
          <Image
            style={styles.smallIcon}
            source={require('../../assets/icons/share.png')}
          />
          <Text style={styles.paragraph}>
WELL DONE !
   {"\n"}
 SHARE AND RATE
          </Text>
          <Image
            style={styles.smallIcon}
            source={require('../../assets/icons/thumbsup.png')}
          />
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
    marginTop: 0,
    height: 570,
  },
  shareRatePanel:{
    flexDirection: 'row'
  },
  timeView:{
   flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    resizeMode: "stretch",
  },
  smallIcon:{
    width: 60,
    height: 60,
     resizeMode: "stretch",
  },
  paragraph: {
    margin: 10,
    marginTop: 0,
    fontSize: 14,
    color: "#001a00",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  endImage: {
    width: 240,
    height: 200,
    resizeMode: "stretch",
  },
  pinkClock:{
    width: 80,
    height: 80,
    resizeMode: "stretch",
  }
});
