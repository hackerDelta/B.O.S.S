import * as React from 'react';
import HomeScreen from './client/components/HomePage';
import { Router, Stack, Scene } from 'react-native-router-flux';
import SignUp from './client/components/SignUp';
import SignIn from './client/components/SignIn';
import BusinessesList from './client/components/BusinessesList';
import SingleBusiness from './client/components/SingleBusiness';
// import CommentForm from './client/components/CommentForm';
import { Provider } from 'react-redux';
import store from './client/store';

export default function App() {
  return (
    <Provider store={store}>
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
          {/* <Scene key="commentForm" component={CommentForm} title="commentForm" /> */}
        </Stack>
      </Router>
    </Provider>
  );
}
