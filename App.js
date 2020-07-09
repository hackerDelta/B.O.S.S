import * as React from 'react';
import HomeScreen from './client/components/HomeScreen';
import { Router, Stack, Scene } from 'react-native-router-flux';
import {
  BusinessesList,
  // CommentForm,
  SignIn,
  SignUp,
  SingleBusiness
} from './client/components';

export default function App() {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="home" component={HomeScreen} initial />
        <Scene key="signin" component={SignIn} title="Signin" />
        <Scene key="signup" component={SignUp} title="Signup" />
        <Scene key="businesses" component={BusinessesList} title="Businesses" />
        <Scene key="business" component={SingleBusiness} title="Business" />
        {/* <Scene key="commentForm" component={CommentForm} title="commentForm" /> */}
      </Stack>
    </Router>
  );
}
