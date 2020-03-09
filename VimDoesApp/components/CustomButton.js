import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Text } from 'react-native';

export default function CustomButton(props) {
    return (
        <View>
            <TouchableOpacity onPress={() => { Alert.alert('Ok'); }}>
                <Text style={styles.button}>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        //no android funciona
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#3fbe87',
        color: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3fbe87',
    }
});