import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Router, Stack, Scene } from 'react-native-router-flux';
import {
  BusinessesList,
  BusinessOwnerProfile,
  CommentForm,
  HomeScreen,
  SignIn,
  SignUp,
  SingleBusiness,
  OwnerFormSignUp
} from './client/components';
import store from './client/store';
import { Provider } from 'react-redux';
import Unauthenticated from './client/components/Unauthenticated';

export default function App() {
  return (
    <Provider store={store}>
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
          <Scene
            key="ownerProfile"
            component={BusinessOwnerProfile}
            title="Owner Profile"
          />
          <Scene
            key="Unauthenticated"
            component={Unauthenticated}
            title="Unauthenticated"
          />
          <Scene
            key="ownerSignup"
            component={OwnerFormSignUp}
            title="OwnerSignUp"
          />
        </Stack>
      </Router>
    </Provider>
  );
}
