import React from '../node_modules/react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import VimDoesLogo from '../components/VimDoesLogo.js'
import CustomButton from '../components/CustomButton'

const CreateUser = () => {
  var user = {
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  }
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
      <VimDoesLogo/>
      <TextInput style={styles.input}
        placeholder="E-mail"
      />
      <TextInput style={styles.input}
        placeholder="Password"
      />
      <TextInput style={styles.input}
        placeholder="Confirm password"
        onChangeText={() => checkPassword()}
      />
      <TextInput style={styles.input}
        placeholder="Username"
      />
      <CustomButton btnName="Submit" action={saveUser}/>
      </View>
    </View>
  );
}

function checkPassword(){
  
}

function saveUser(){
  console.warn("Salvou")
}

export default CreateUser;

const styles = StyleSheet.create({
  container:{
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
