import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './client/components/NavStack';
import { SafeAreaView } from 'react-native';
import SignUp from './client/components/SignUp';
import SignIn from './client/components/SignIn';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar style="auto" />
    </NavigationContainer>
    // <SignIn />
    // <SignUp />
  );
}
