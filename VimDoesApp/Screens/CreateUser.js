import React, { useState } from '../node_modules/react';
import { StyleSheet, View, TextInput, AsyncStorage, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import VimDoesLogo from '../components/VimDoesLogo.js'
import CustomButton from '../components/CustomButton'
import api from '../services/api';

const CreateUser = () => {
  var user = {
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  }

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
          <TextInput style={styles.input}
            placeholder="E-mail"
            onChangeText={(text) => setEmail(text)}
            onChange={() => setError('')}
            blurOnSubmit={false}
          />
          <TextInput style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            onChange={() => setError('')}
            blurOnSubmit={false}
          />
          <TextInput style={styles.input}
            placeholder="Confirm password"
            secureTextEntry={true}
            onChangeText={(text) => setConfirmPassword(text)}
            onChange={() => setError('')}
            blurOnSubmit={false}
          />
          <TextInput style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            onChange={() => setError('')}
            blurOnSubmit={false}
          />
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
