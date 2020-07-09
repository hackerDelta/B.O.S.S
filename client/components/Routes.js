import * as React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Signup from './SignUp';
import SignIn from './SignIn';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="Signin" component={SignIn} title="Login" initial={true} />
          <Scene key="Signup" component={Signup} title="SignUp" />
        </Stack>
      </Router>
    );
  }
}
