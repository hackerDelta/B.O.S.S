import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Spinner
        visible={true}
        size="large"
        textContent={'Loading...'}
        color="gray"
        textStyle={styles.spinnerTextStyle}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: 'white',
    padding: 8
  },
  spinnerTextStyle: {
    color: 'black',
    fontSize: 23
  }
});
