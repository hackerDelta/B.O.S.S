import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { authsignup } from '../store/user';

const FormSignUp = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = () => {
    props.signup(firstName, lastName, email, password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        placeholder="First Name"
        placeholderTextColor="#003344"
        autoCapitalize="none"
        value={firstName}
        onChangeText={(text) => {
          setFirstName(text);
        }}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Last Name"
        placeholderTextColor="#003344"
        autoCapitalize="none"
        value={lastName}
        onChangeText={(text) => {
          setLastName(text);
        }}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Email"
        placeholderTextColor="#003344"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        placeholderTextColor="#003344"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.textStyle}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
const mapSignup = (state) => {
  return {
    user: state.user
  };
};

const mapDispatch = (dispatch) => {
  return {
    signup: (firstName, lastName, email, password) =>
      dispatch(authsignup(firstName, lastName, email, password))
  };
};

export default connect(mapSignup, mapDispatch)(FormSignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    alignItems: 'center'
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
    backgroundColor: '#144d62',
    borderRadius: 25,
    marginVertical: 10
  },
  textStyle: {
    color: '#d6f3ff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 7
  }
});
