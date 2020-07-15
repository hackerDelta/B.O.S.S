import * as React from 'react';
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

export default class OwnerFormSignUp extends React.Component {
  goBack() {
    Actions.signup();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Logo />
        {/* <Text style={styles.title}> Owner </Text> */}
        <TextInput
          style={styles.inputBox}
          placeholder="First Name"
          placeholderTextColor="#003344"
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Last Name"
          placeholderTextColor="#003344"
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Company Name"
          placeholderTextColor="#003344"
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Company Address"
          placeholderTextColor="#003344"
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor="#003344"
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          placeholderTextColor="#003344"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textStyle}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.signupText}>
          <Text style={styles.text}>Not a business owner?</Text>
          <TouchableOpacity onPress={this.goBack}>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3d7f99'
  },
  // title: {
  //   fontSize: 27.5,
  //   color: 'white'
  // },
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
