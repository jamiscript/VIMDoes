import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <TopBar/>
      <Middle/>
      <Bottom/>
    </View>
  );
}

const TopBar = () => {
  return (
    <View style={{flex: 1, margin: 5}}>
      <TouchableOpacity style={{flex: 1,
                                backgroundColor: 'white',
                                justifyContent: 'center'
                              }}
      >
        <Text style={styles.customButton2}>
          Você ainda não realizou nenhuma venda. Vamos vender?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const Middle = () => {
  return (
    <View style={{flex: 4}}>
      <View style={{flex: 1}}>
        <CustomButton text='Vendas'/>
      </View>
      <View style={{flex: 3}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <CustomButton text='Estoque'/>
          <CustomButton text='Clientes'/>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <CustomButton text='Catálogos'/>
          <CustomButton text='Resumo financeiro'/>
        </View>
      </View>
    </View>
  );
}

const Bottom = () => {
  return (
    <View style={{flex: 1.5, backgroundColor: 'white'}}>
    </View>
  );
}

const CustomButton = (prop) => {
  return (
    <View style={{flex: 1, margin: 5}}>
      <TouchableOpacity style={{flex: 1,
                                backgroundColor: 'darkblue',
                                justifyContent: 'center'}}
      >
        <Text style={styles.customButton}>{prop.text}</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  customButton: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '20px'
  },
  customButton2: {
    textAlign: 'flex-start',
    textAlignVertical: 'bottom',
    color: 'gray',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '15px'
  }
});


export default Home;
