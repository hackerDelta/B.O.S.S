import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from './Logo';
import FormSignUp from './FormSignUp';
import SignIn from './SignIn';
import OwnerFormSignUp from './OwnerFormSignUp';

export default class SignUp extends React.Component {
  goBack() {
    Actions.signin();
  }
  goForward() {
    Actions.ownerSignup();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Logo />
        <FormSignUp type="Sign Up" />
        <View style={styles.signupText}>
          <Text style={styles.text}>Have an account?</Text>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupButton}> Login</Text>
          </TouchableOpacity>
          <Text style={styles.text}>Are you an owner?</Text>
          <TouchableOpacity onPress={this.goForward}>
            <Text style={styles.signupButton}> Sign Up</Text>
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
    flexGrow: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    flexDirection: 'row',
    flexWrap: 'wrap'
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
  // ownerText:{
  //   flexWrap: 'wrap',
  //   justifyContent: 'flex-start',
  //   flexDirection: 'row',
  //   alignItems: 'center'
  // }
});
