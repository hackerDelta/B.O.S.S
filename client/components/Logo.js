import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 170, height: 170 }}
        source={require('../../assets/logo.png')}
      />
      <Text style={styles.logoText}>Welcome</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logoText: {
    marginVertical: 5,
    fontSize: 25,
    color: '#e2f2f0'
  }
});
export default Logo;
