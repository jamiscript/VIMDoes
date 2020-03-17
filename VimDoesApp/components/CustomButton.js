import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Text } from 'react-native';


const CustomButton = (myProp) => {
    return (
        <View>
            <TouchableOpacity onPress={myProp.action}>
                <Text style={styles.button}>
                    {myProp.btnName}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#3fbe87',
        color: 'white',
        //no android funciona
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3fbe87',
    }
});

export default CustomButton;