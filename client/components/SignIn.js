import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { Action } from 'react-native-router-flux';
import Logo from './Logo';
import FormSignIn from './FormSignIn';
import SignUp from './SignUp';

export default class SignIn extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#99573d" barStyle="light-content" />
        <Logo />
        <FormSignIn type="Signin" />
        <View style={styles.signuptext}>
          <Text style={styles.text}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupButton}> Signup</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d7f99',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signuptext: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 15,
    flexDirection: 'row'
  },
  text: {
    color: '#b5deef',
    fontSize: 20
  },
  signupButton: {
    color: '#b5deef',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
