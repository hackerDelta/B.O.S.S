import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 250, height: 250 }}
        source={require('../../assets/lastone.png')}
      />
      {/* <Text style={styles.logoText}>Welcome</Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  logoText: {
    fontSize: 25,
    color: '#e2f2f0'
  }
});
export default Logo;
