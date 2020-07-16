import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from './Logo';
import axios from 'axios';
import { HOST_WITH_PORT } from '../../environment';

const OwnerFormSignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const newOwner = {
        firstName,
        lastName,
        email,
        password,
        isBusinessOwner: true
      };
      await axios.post(
        `https://hackerdelta-capstone.herokuapp.com/api/users`,
        newOwner,
        Actions.signin()
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <TextInput
        style={styles.inputBox}
        placeholder="First Name"
        placeholderTextColor="#003344"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Last Name"
        placeholderTextColor="#003344"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Company Name"
        placeholderTextColor="#003344"
        value={companyName}
        onChangeText={(text) => setCompanyName(text)}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Company Address"
        placeholderTextColor="#003344"
        value={companyAddress}
        onChangeText={(text) => setCompanyAddress(text)}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Email"
        placeholderTextColor="#003344"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        placeholderTextColor="#003344"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.textStyle}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.signupText}>
        <Text style={styles.text}>Not a business owner?</Text>
        <TouchableOpacity onPress={() => Actions.signup()}>
          <Text style={styles.signupButton}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OwnerFormSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3d7f99'
  },
  inputBox: {
    backgroundColor: '#e8ebf3',
    width: 300,
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 20,
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: 'black',
    borderRadius: 25,
    marginVertical: 10,
    color: 'white'
  },
  textStyle: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 7
  },
  signupText: {
    flexGrow: 0.25,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 15,
    flexDirection: 'row',
    color: 'white'
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    color: '#ffffff',
    fontSize: 20
  }
});
