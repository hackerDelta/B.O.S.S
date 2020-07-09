import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import HomeScreen from './client/components/HomePage';
import { Router, Stack, Scene } from 'react-native-router-flux';
import SignUp from './client/components/SignUp';
import SignIn from './client/components/SignIn';

export default function App() {
  return (
    // <SafeAreaView>
    //   <StatusBar style="light" />
    //   <HomeScreen />
    //   <Routes />
    // </SafeAreaView>
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="home" component={HomeScreen} initial />
        <Scene key="signin" component={SignIn} title="Signin" />
        <Scene key="signup" component={SignUp} title="Signup" />
      </Stack>
    </Router>
  );
}
