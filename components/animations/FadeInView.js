import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, Image, StyleSheet } from 'react-native';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 3000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView>
          <Image  style={[styles.hand,{marginTop: -50, marginLeft:50}]} source={require("../../assets/icons/handFlash.png")} />
      </FadeInView>
    </View>
  )
}
const styles = StyleSheet.create({
  hand: {
    width: 150,
    height: 190,
    resizeMode: "stretch",
  }
});