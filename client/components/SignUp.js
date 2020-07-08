import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import Logo from './Logo';
import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';
import SignIn from './SignIn';

export default class SignUp extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#99573d" barStyle="light-content" />
        <Logo />
        <FormSignUp type="Signup" />
        <View style={styles.signuptext}>
          <Text style={styles.text}>Have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupButton}> Login</Text>
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
