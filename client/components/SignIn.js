import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from './Logo';
import { connect } from 'react-redux';
import { authlogin } from '../store/user';

const SignIn = (props) => {
  const signup = () => {
    Actions.signup();
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    props.login(email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#99573d" barStyle="light-content" />
      <Logo />
      <View style={styles.container2}>
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor="#003344"
          selectionColor="#fff"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#003344"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.textStyle}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signuptext}>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={signup}>
          <Text style={styles.signupButton}>Signup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapLogin = (state) => {
  return {
    user: state.user
  };
};

const mapDispatch = (dispatch) => {
  return {
    login: (email, password) => dispatch(authlogin(email, password))
  };
};

export default connect(mapLogin, mapDispatch)(SignIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d7f99',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  container2: {
    flex: 1,
    alignItems: 'center'
  },
  signupText: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingVertical: 15
  },
  text: {
    color: '#b5deef',
    fontSize: 20
  },
  signupButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputBox: {
    // flexGrow: 0.5,
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
