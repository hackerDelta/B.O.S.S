import * as React from 'react';
import HomeScreen from './client/components/HomePage';
import { Router, Stack, Scene } from 'react-native-router-flux';
import SignUp from './client/components/SignUp';
import SignIn from './client/components/SignIn';
import BusinessesList from './client/components/BusinessesList';
import SingleBusiness from './client/components/SingleBusiness';
import OwnerFormSignUp from './client/components/OwnerFormSignUp';
import CommentForm from './client/components/CommentForm';

export default function App() {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="home" component={HomeScreen} />
        <Scene key="signin" component={SignIn} title="Signin" />
        <Scene key="signup" component={SignUp} title="Signup" />
        <Scene key="businesses" component={BusinessesList} title="Businesses" />
        <Scene key="business" component={SingleBusiness} title="Business" />
        <Scene
          key="ownerSignup"
          component={OwnerFormSignUp}
          title="OwnerSignUp"
        />
        <Scene key="commentForm" component={CommentForm} title="commentForm" />
      </Stack>
    </Router>
  );
}
