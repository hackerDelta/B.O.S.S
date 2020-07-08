import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableHighlight,
  SafeAreaView
} from 'react-native';
import SignUp from './SignUp';

const image = require('../../assets/HomePage.png');

export function HomeScreen() {
  return (
    <ImageBackground source={image} style={styles.image}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.appTitle}>WELCOME!</Text>
        <TouchableHighlight style={styles.button}>
          <Text>Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
          <Text>Log In</Text>
        </TouchableHighlight>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    fontSize: 25
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'teal',
    padding: '5%',
    borderRadius: 10,
    width: '50%'
  },
  container: {
    flex: 1,
    marginTop: '100%',
    marginBottom: '15%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    height: '100%',
    width: '100%'
  }
});
