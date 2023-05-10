import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { getIP, getDevice } from "./fetchIP"
import Slider from '@react-native-community/slider';
import { getWeather } from "../screens/CodeToWeather";
import { setCities } from '../actions/cities';

const QuestionScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const deviceID = useSelector(state => state.deviceID)

  const fetchCities = async () => {
    const response = await fetch(
      `http://${getIP()}:8080/api/v1/user?temperature=true&weathercode=true&windspeed=true&relativehumidity_2m=true`, {
          method: 'GET',
          headers: {'x-device-id': deviceID}
        }
    );
    const jsonData = await response.json();
    var cityArray = []
    for(var i = 0; i < jsonData['cities'].length; i++){
      weather = jsonData['cities'][i]['weather']
      //weather = await fetchWeather(jsonData['cities'][i]["latitude"],jsonData['cities'][i]["longitude"] )
      cityArray.push({city_name: jsonData['cities'][i]['city_name'], 
        key: i + 1, 
        country: jsonData['cities'][i]['country'],
        id: jsonData['cities'][i]['id'], 
        temperature: weather['temperature'], 
        weather: getWeather(weather['weathercode']),
        weathercode: weather['weathercode'],
        humidity: weather['relativehumidity_2m'],
        windspeed: weather['windspeed'],
        lat: jsonData['cities'][i]['latitude'], 
        long: jsonData['cities'][i]['longitude'], 
        hat: jsonData['cities'][i]['recommendation'][0],
        shirt: jsonData['cities'][i]['recommendation'][1],
        jacket: jsonData['cities'][i]['recommendation'][2],
        pants: jsonData['cities'][i]['recommendation'][3],
        shoes: jsonData['cities'][i]['recommendation'][4],
        umbrella: jsonData['cities'][i]['recommendation'][5],
      })
    }
    dispatch(setCities(cityArray))
  };
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
        if (data && data.questions) {
          setQuestions(data.questions);
        }
      })
      .catch(error => console.error(error));
  }, []);

  const handleResponse = (question_label, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [question_label]: answer
    }));
  };
  
  const handleConfirm = () => {
    console.log('Test1',answers); 
  
    const formattedAnswers = {
      questions: {},
    };
      for (const [key, value] of Object.entries(answers)) {
      formattedAnswers.questions[key] = value.toString();
    }
    const device_id = deviceID

    console.log('Test2',formattedAnswers);

      fetch(`http://${getIP()}:8080/api/v1/user/questions/answer`, {
      method: 'PATCH',
      headers: {
        'x-device-id': device_id,
        'Content-Type': 'application/json',
      },


      body: JSON.stringify(formattedAnswers),

    })
    .then(response => {
      return response.json();
    })

      .then(data => {
        navigation.navigate('Home');
      })
      .catch(error => console.error(error));
    fetchCities()
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
    <View key={question.question_label} style={styles.questionBox}>
    <Text style={styles.questionText}>{question.question}</Text>
    {question.question_label === 'userTemp' ? (
  <View>
    <Slider
      style={{ width: '100%', height: 40 }}
      minimumValue={-10}
      maximumValue={10}
      step={1}
      value={answers[question.question_label] || 0}
      onValueChange={(value) => handleResponse('userTemp', value)}
    />
    <View style={styles.sliderLabels}>
      {[...Array(21)].map((_, i) => (
        <Text key={i} style={styles.sliderLabel}>
          {i - 10}
        </Text>
      ))}
    </View>
  </View>
) : question.question_label === 'userPlace' ? (
  <View>
    <Slider
      style={{ width: '100%', height: 40 }}
      minimumValue={-10}
      maximumValue={10}
      step={1}
      value={answers[question.question_label] || 0}
      onValueChange={(value) => handleResponse('userPlace', value)}
    />
    <View style={styles.sliderLabels}>
      {[...Array(21)].map((_, i) => (
        <Text key={i} style={styles.sliderLabel}>
          {i - 10}
        </Text>
      ))}
    </View>
  </View>
) : (
  <View style={styles.buttonsContainer}>
    <TouchableOpacity
      style={[
        styles.button,
        question.selected_answer === 1 && styles.selected,
      ]}
      onPress={() => handleResponse(question.question_label, 1)}
    >
      <Text style={styles.buttonText}>Yes</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.button,
        question.selected_answer === 0 && styles.selected,
      ]}
      onPress={() => handleResponse(question.question_label, 0)}
    >
      <Text style={styles.buttonText}>No</Text>
    </TouchableOpacity>
  </View>
)}
  </View>
))}

      </ScrollView>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
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
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
    paddingBottom: 10,
    position: 'absolute',
    bottom: -30,
  },
  sliderLabel: {
    fontSize: 12,
    color: '#444',
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
    borderWidth: 2,
    borderColor: '#3a9def',
  }
});

export default QuestionScreen;
