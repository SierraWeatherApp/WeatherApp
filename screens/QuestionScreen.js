import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Pressable, Slider } from 'react-native';
import { getIP, getDevice } from "./fetchIP"


const QuestionScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const deviceID = useSelector(state => state.deviceID)
  const device_id = deviceID

  useEffect(() => {
    const device_id = deviceID;
    fetch(`http://${getIP()}:8080/api/v1/user/questions/all`, {
      headers: {
        'x-device-id': device_id,
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setQuestions(data.questions);
      })
      .catch(error => console.error(error));
  }, []);

  const handleResponse = (questionId, answer) => {
    console.log(`Question ${questionId} received ${answer} response`);
  
    const updatedQuestions = questions.map((question) => {
      if (question.question_id === questionId) {
        return {
          ...question,
          selected_answer: answer,
        };
      }
      return question;
    });
      setQuestions(updatedQuestions);
  
    if (questionId === 4) {
      const updatedQuestions = questions.map((question) => {
        if (question.question_id === questionId) {
          return {
            ...question,
            selected_answer: answer,
            slider_value: answer,
          };
        }
        return question;
      });
      setQuestions(updatedQuestions);
    }   // Send the answer to the backend API
    fetch(`http://${getIP()}:8080/api/v1/user/questions/answer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question_id: questionId,
        answer: answer,
        device_id: device_id,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));
  };



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Image style={styles.arrow} resizeMode="contain" source={require('../assets/arrow1.png')} />
        </Pressable>
      </View>
      <ScrollView>
      {questions && questions.map((question) => (
  <View key={question.question_id} style={styles.questionBox}>
    <Text style={styles.questionText}>{question.question}</Text>
    {question.question_id === 4 ? (
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={-10}
        maximumValue={10}
        step={1}
        value={question.slider_value}
        onValueChange={(value) => handleResponse(question.question_id, value)}
      />
    ) : (
    
    <View style={styles.buttonsContainer}>
  {/* "Yes" button */}
  <TouchableOpacity
    style={[
      styles.button,
      question.selected_answer === 1 && styles.selected,
    ]}
    onPress={() => handleResponse(question.question_id, 1)}
  >
    <Text style={styles.buttonText}>Yes</Text>
  </TouchableOpacity>
  
  {/* "No" button */}
  <TouchableOpacity
    style={[
      styles.button,
      question.selected_answer === 0 && styles.selected,
    ]}
    onPress={() => handleResponse(question.question_id, 0)}
  >
    <Text style={styles.buttonText}>No</Text>
  </TouchableOpacity>
</View>
    )}
  </View>
))}

      </ScrollView>
      <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('Home')}>
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
    top: 10,
    left: 0,
    padding: 10,
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  arrow: {
    width: 30,
    height: 30,
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
  selected: {
    backgroundColor: '#FCD200',
  }
});

export default QuestionScreen;