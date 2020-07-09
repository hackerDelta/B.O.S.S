import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './HomePage';
import { SettingsScreen, ScreenA, ScreenB } from './SampleScreens';
import BusinessesList from './BusinessesList';
import SingleBusiness from './SingleBusiness';
import CommentForm from './CommentForm';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Businesses" component={BusinessesList} />
      <Tab.Screen name="SingleBusiness" component={SingleBusiness} />
      <Tab.Screen name="CommentForm" component={CommentForm} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="ScreenA" component={ScreenA} />
      <Tab.Screen name="ScreenB" component={ScreenB} />
    </Tab.Navigator>
  );
}

// import * as React from 'react';

// import { createStackNavigator } from '@react-navigation/stack';
// import { View, Button, StyleSheet } from 'react-native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.navigation}>
//       <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//     </View>
//   );
// }

// function ProfileScreen({ navigation }) {
//   return (
//     <View style={styles.navigation}>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// export default function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{ title: 'Profile' }}
//       />
//     </Stack.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   navigation: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
