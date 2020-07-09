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
const HomeScreen = () => {
  const signin = () => Actions.signin();
  const signup = () => Actions.signup();
  const guest = () => Actions.businesses();

  return (
    <ImageBackground source={image} style={styles.image}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.appTitle}>WELCOME!</Text>
        <TouchableOpacity style={styles.button} onPress={signup}>
          <Text style={styles.textSign}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={signin}>
          <Text style={styles.textSign}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={guest}>
          <Text style={styles.textSign}>Guest</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;

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
