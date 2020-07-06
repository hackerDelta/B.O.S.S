// FOR TESTING PURPOSES OF TAB NAVIGATION ONLY

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>
  );
}

export function ScreenA() {
  return (
    <View style={styles.container}>
      <Text>Welcome to ScreenA!</Text>
    </View>
  );
}

export function ScreenB() {
  return (
    <View style={styles.container}>
      <Text>Welcome to ScreenB!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
