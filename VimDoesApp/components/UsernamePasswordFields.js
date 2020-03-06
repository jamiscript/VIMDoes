import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default function UsernamePasswordFields() {
    return (
        <View>
            <TextInput style={styles.input}
                placeholder="Username"
                onSubmitEditing={() => { this.passwordInput.focus(); }}
                blurOnSubmit={false}
            />
            <TextInput style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                ref={(input) => { this.passwordInput = input; }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    }
});