import React, { useState } from '../node_modules/react';
import { StyleSheet, View, Text, AsyncStorage, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import VimDoesLogo from '../components/VimDoesLogo.js'
import CustomButton from '../components/CustomButton.js'
import api from '../services/api';
import CustomTextInput from '../components/CustomTextInput.js'

const CreateUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const submitUser = async () => {
    try {
      const response = await api.post('api/token/', {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        username: username,
      });
      await AsyncStorage.setItem('VIMDoes_token', response.data.access);
      Alert.alert('Submitted with success');
    }
    catch (error) {
      if (error.response.status == 401) {
        setError('Something went wrong');
      }
      else {
        setError('Please fill the fields correctly');
        console.debug(error.response);
      }
    }
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <VimDoesLogo />
          <CustomTextInput
            placeholder="E-mail"
            action={(text) => setEmail(text)}
          />
          <CustomTextInput
            placeholder="Password"
            action={(text) => setPassword(text)}
          />
          <CustomTextInput
            placeholder="Confirm password"
            action={(text) => setConfirmPassword(text)}
          />
          <CustomTextInput
            placeholder="Username"
            action={(text) => setUsername(text)}
          />
          <Text style={styles.error}>{error}</Text>
          <CustomButton btnName="Submit"
            action={submitUser} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

function checkPassword() {

}

function saveUser() {
  console.warn("Salvou")
}

export default CreateUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    color: 'red',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  logo: {
    width: 168,
    height: 84,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  }
}); 
