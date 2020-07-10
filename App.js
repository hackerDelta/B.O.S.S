import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Router, Stack, Scene } from 'react-native-router-flux';
import {
  BusinessesList,
  CommentForm,
  HomeScreen,
  SignIn,
  SignUp,
  SingleBusiness
} from './client/components';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Router>
        <Stack key="root" hideNavBar>
          <Scene key="home" component={HomeScreen} initial />
          <Scene key="signin" component={SignIn} title="Signin" />
          <Scene key="signup" component={SignUp} title="Signup" />
          <Scene
            key="businesses"
            component={BusinessesList}
            title="Businesses"
          />
          <Scene key="business" component={SingleBusiness} title="Business" />
          <Scene
            key="commentForm"
            component={CommentForm}
            title="commentForm"
          />
        </Stack>
      </Router>
    </>
  );
}
