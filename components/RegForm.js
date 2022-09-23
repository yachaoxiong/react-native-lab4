import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegForm() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //click handler
  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }
  
  const onSignUpButtonClicked = () => {
    alert(
      `Are you sure those information are correct ? ${firstName} ${lastName} and ${email}`
    );
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={text => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={text => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.clearButton} onPress={clearForm}>
        <Text style={styles.buttonText}>Clear Form</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onSignUpButtonClicked}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderColor: '#eee',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5
  },
  button: {
    backgroundColor: 'blue',
    alignSelf: 'stretch',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    color: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  clearButton: {
    alignSelf: 'stretch',
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  }
})