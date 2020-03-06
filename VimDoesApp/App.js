import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import UsernamePasswordFields from './components/UsernamePasswordFields'
import CustomButton from './components/CustomButtton'

export default function App() {
  const screenTitle = "Bem-vindo(a)!";
  return (
    <View style={styles.content}>
      <Text style={styles.textStyle}> {screenTitle} </Text>
      <Image
        style={styles.logo}
        source={require('./assets/vimdoes2.png')}
      />

      <UsernamePasswordFields />
      <CustomButton/>

    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  textStyle: {
    fontSize: 30,
    color: '#3fbe87',
    marginTop: 50,
  },
  logo: {
    width: 168,
    height: 84,
  },
});