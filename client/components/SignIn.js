import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from './Logo';
import FormSignIn from './FormSignIn';

export default class SignIn extends React.Component {
  signup() {
    Actions.signup();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#99573d" barStyle="light-content" />
        <Logo />
        <FormSignIn type="Signin" />
        <View style={styles.signupText}>
          <Text style={styles.text}>Don't have an account?</Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}> Sign up</Text>
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
  signupText: {
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
