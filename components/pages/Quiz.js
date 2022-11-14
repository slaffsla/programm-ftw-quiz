import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground
} from 'react-native';
import ReactQuestions from '../data/ReactQuestions';
import AngularQuestions from '../data/AngularQuestions';
import Html5Questions from '../data/Html5Questions';
import FixedQuizTop from '../FixedQuizTop';
import QuizComplete from './QuizComplte';
import TopMenuBar from '../TopMenuBar';
import { ProgressBar, Colors } from 'react-native-paper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '',
    avatar: '',
    answers: [''],
  },
];
let correctList = [];
let totalScore  = 0;
const initGame = () => {
  totalScore = 0;
};
export default function Quiz({ navigation, route }) {
  const [perguntaTitle, setPerguntaTitle] = useState(null);
  const [perguntaImage, setPerguntaImage] = useState(null);
  const [perguntaIndex, setPerguntaIndex] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [gameStatus, setGameStatus] = useState('NEW GAME');
  const [gameOver, setGameOver] = useState(false);
  const [bossName, setBossName] = useState('space');

  const randomizeBoss = () => {
    const avalibleBosses = ['china','india','motivators','rus','space','work'];
    setBossName(avalibleBosses[Math.floor(Math.random()*avalibleBosses.length)]);
  }

  const submitAnswer = (index) => {
  console.log('submit answer', index)
   console.log('correct list answer', correctList)
  if(gameStatus === 'SUBMITTING'){
        return;
  }
    setGameStatus('SUBMITTING');
    setSelectedId(index);

    setTimeout(() => {
     setSelectedId(index);
       if(correctList[perguntaIndex] === index){
        totalScore += 1;
       }
        if (perguntaIndex >= 9) {
          setGameStatus('GAME OVER');
          setGameOver(true);
          return;
        }
      setPerguntaIndex((old) => (old += 1));
      generateQuestion();
      setSelectedId(null);
      setGameStatus('SUBMITTING-DONE');
    }, 800);

  };

  const generateQuestion = useCallback(() => {
    if (route.params.lang === 'REACT') {
      setQuestions(ReactQuestions[perguntaIndex].answers);
      setPerguntaTitle(ReactQuestions[perguntaIndex].question); 
      setPerguntaImage(ReactQuestions[perguntaIndex].image); 
      correctList = [];
      ReactQuestions.forEach((item) => {
        correctList.push(item.correctIndex);
      });
    } else if (route.params.lang === 'ANGULAR') {
      setQuestions(AngularQuestions[perguntaIndex].answers);
      setPerguntaTitle(AngularQuestions[perguntaIndex].question);
      correctList = [];
      AngularQuestions.forEach((item) => {
        correctList.push(item.correctIndex);
      });
    } else {
      setQuestions(Html5Questions[perguntaIndex].answers);
      setPerguntaTitle(Html5Questions[perguntaIndex].question);
      correctList = [];
      Html5Questions.forEach((item) => {
        correctList.push(item.correctIndex);
      });
    }
  }, [perguntaIndex, route.params.lang]);

  useEffect(() => {
    generateQuestion();
    initGame();
    setGameStatus('NEW GAME');
    setGameOver(false);
    setPerguntaIndex(0);
    randomizeBoss();
  }, []);

  const getBtnColor = (index) => {
   if(correctList[perguntaIndex] === index){
    return '#009900';
   }
    return '#b30000';
  }
  const listItems = questions?.map((question, index) => (
    <View style={{
      width: 150,
      justifyContent: 'space-between',
      padding: 5,
      key:{index}
    }}>
      <Button
        key={index}
        title={question}
        color={index == selectedId ? getBtnColor(index) : '#9999ff'}
        onPress={() => submitAnswer(index)}
      />
    </View>
  ));
  return (
    <View style={{ backgroundColor: '#e0eaff', height: 690 }}>
      {!gameOver && (
        <View style={styles.container}>
          <FixedQuizTop {...{ navigation }} lang={route.params.lang} />
          <View style={styles.countDown}>
         
          </View>
          <Text
            style={[
              styles.paragraph,
              { fontSize: 13, color: '#ee5200' },
            ]}>
            {`DIFFICULTY: ${route.params.difficulty}`}
          </Text>
          <Text
            style={[
              styles.paragraph,
              { marginTop: -14, fontSize: 15, color: '#0083bb' },
            ]}>
            {`FRAMEWORK :${route?.params?.lang}`}
          </Text>
          <SafeAreaView style={styles.container}>
            <View style={[styles.balloon, { backgroundColor: '#ffffe6', height: 70, width: 290, marginBottom: 33 }]}>
              <Text style={styles.paragraph}> {perguntaTitle} </Text>
            </View>
            <View style={{ marginTop: -30 }}>
             
                <Image
                style={styles.questionImage}
                source={require(`../../assets/images/bosses/china/1.jpg`)}
              />
              
              
            </View>
            <View
              style={{
                width: 300,
                justifyContent: 'space-between',
                paddingTop: 10,
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}>
              {listItems}
            </View>
            <Text style={styles.paragraph}>question number : {perguntaIndex} from 10</Text>
            <ProgressBar
              style={{
                height: 15,
                width: 270,
                marginLeft: 5,
              }}
              progress={perguntaIndex / 10}
              color="#ff4100"
            />
          </SafeAreaView>
        </View>
      )}
      {gameOver != false && (
        <QuizComplete {...{ navigation }} calculatedScore={totalScore} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#e0eaff',
  },
  countDown: {
    paddingTop: 5
  },
  questionImage: {
    width: 300,
    height: 200,
    resizeMode: "stretch",
    paddingBottom: 10,
  },
  submitBtn: {
    width: 200,
    height: 100,
    resizeMode: "stretch",
  },
  paragraph: {
    margin: 14,
    marginTop: 0,
    fontSize: 14,
    color: '#001a00',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  balloon: {
    paddingHorizontal: 5,
    marginBottom: 10,
    borderRadius: 20,
  },
});
