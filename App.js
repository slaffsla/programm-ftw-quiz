import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/pages/Home';
import ChooseRoadMap from './components/pages/ChooseRoadMap';
import Welcome from './components/pages/Welcome';
import ReactPage from './components/pages/ReactPage';
import AngularPage from './components/pages/AngularPage';
import HtmlPage from './components/pages/HtmlPage';
import Quiz from './components/pages/Quiz';
import About from './components/pages/About';
import TopMenuBar from './components/TopMenuBar';
import HelpPage from './components/pages/Help';
import TestPage from './components/pages/TestPage';
import HomePage from './components/pages/HomePage';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <View style={styles.container}>

      <NavigationContainer style={{ position: 'absolute', zIndex: 1 }}>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="ChooseRoadMap" component={ChooseRoadMap} />
          <Stack.Screen name="ReactPage" component={ReactPage} />
          <Stack.Screen name="AngularPage" component={AngularPage} />
          <Stack.Screen name="HtmlPage" component={HtmlPage} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="AboutPage" component={About} />
           <Stack.Screen name="HelpPage" component={HelpPage} />
        </Stack.Navigator>

      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#18C5C5',
    flex: 6
  }
});
export default App;
