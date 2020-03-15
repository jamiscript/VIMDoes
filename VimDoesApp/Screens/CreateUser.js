import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import VimDoesLogo from '../components/VimDoesLogo.js'

const app = () => {
  var user = {
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  }
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <VimDoesLogo/>
      <TextInput style={styles.input}
        placeholder="Username"
        value={user.username}
      />
      <TextInput style={styles.input}
        placeholder="Senha"
        value={user.password}
      />
      <TextInput style={styles.input}
        placeholder="Confirme a senha"
        value={user.confirmPassword}
        onChangeText={() => checkPassword()}
      />
      <TextInput style={styles.input}
        placeholder="Email"
        value={user.email}
      />
      <Button title="Cadastrar" onPress={() => saveUser()} ></Button>
      </View>
    </View>
  );
}

function checkPassword(){
  
}

function saveUser(){
  
}

export default app;

const styles = StyleSheet.create({
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
