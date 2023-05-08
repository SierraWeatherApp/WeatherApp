import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,Pressable,
} from 'react-native';

const QuestionScreen = ({navigation}) => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: 'Sandles?',
    },
    {
      id: 2,
      text: 'Who?',
    },
    {
      id: 3,
      text: 'When?',
    },
    {
      id: 4,
      text: 'Where?',
    },
  ]);

  const [responses, setResponses] = useState({});

  const handleResponse = (questionId, answer) => {
    console.log(`Question ${questionId}  ${answer} `);
    setResponses({...responses, [questionId]: answer});
  };

  const getButtonStyle = (questionId, answer) => {
    if (responses[questionId] === answer) {
      return styles.buttonSelected;
    } else {
      return styles.button;
    }
  };

  const handleConfirm = () => {
    navigation.navigate('SlideScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.arrow}
            resizeMode="contain"
            source={require('../assets/arrow1.png')}
          />
        </Pressable>
      </View>
      <ScrollView>
        {questions.map((question) => (
          <View key={question.id} style={styles.questionBox}>
            <Text style={styles.questionText}>{question.text}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={getButtonStyle(question.id, 'yes')}
                onPress={() => handleResponse(question.id, 'yes')}>
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={getButtonStyle(question.id, 'no')}
                onPress={() => handleResponse(question.id, 'no')}>
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
  },
  header: {
    position: 'relative',
    top: 20,
    left: 0,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  arrow: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginBottom: 20,

  },
  questionBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 10,

    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#3a9def',
    padding: 10,
    borderRadius: 20,
    width: '45%',
  },
  buttonSelected: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 20,
    width: '45%',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#3a9def',
    padding: 10,
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  confirmButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default QuestionScreen;