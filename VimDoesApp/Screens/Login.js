import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import UsernamePasswordFields from '../components/UsernamePasswordFields'
import VimDoesLogo from '../components/VimDoesLogo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Login(props) {
  const signUpMessage = "Doesn't have an account? Sign up"
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <VimDoesLogo />
        <UsernamePasswordFields />
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={styles.message}>{signUpMessage}</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  message: {
    marginTop: 30,
    color: 'gray',
    fontWeight: 'bold'
  },
});