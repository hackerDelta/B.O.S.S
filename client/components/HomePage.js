import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const image = require('../../assets/HomePage.png');

export default class HomeScreen extends React.Component {
  signin() {
    Actions.signin();
  }
  signup() {
    Actions.signup();
  }

  render() {
    return (
      <ImageBackground source={image} style={styles.image}>
        <StatusBar style="auto" />
        <SafeAreaView style={styles.container}>
          <Text style={styles.appTitle}>WELCOME!</Text>
          <TouchableOpacity style={styles.button} onPress={this.signup}>
            <Text style={styles.textSign}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.signin}>
            <Text style={styles.textSign}>Log In</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '65%',
    marginBottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  appTitle: {
    fontSize: 25
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#144d62',
    padding: '5%',
    marginVertical: 10,
    borderRadius: 25,
    width: 300
  },
  textSign: {
    color: '#e2f2f0'
  }
});
