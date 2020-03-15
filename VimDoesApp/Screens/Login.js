import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import UsernamePasswordFields from '../components/UsernamePasswordFields'
import CustomButton from '../components/CustomButton'
import VimDoesLogo from '../components/VimDoesLogo'

function login(props){
    const screenTitle = "Bem-vindo(a)!";
    return(
    <View style={styles.content}>
        <Text style={styles.textStyle}> {screenTitle} </Text>
        <VimDoesLogo/>
        <UsernamePasswordFields/>
        <CustomButton/>
        <Button title='Criar conta' onPress={() => props.navigation.navigate('SignUp')}></Button>
    </View>
    );
}

export default login;

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
  });