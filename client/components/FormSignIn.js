import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class FormSignIn extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor="#003344"
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          placeholderTextColor="#003344"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textStyle}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  inputBox: {
    // flexGrow: 0.5,
    backgroundColor: '#e8ebf3',
    width: 300,
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 20,
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: '#144d62',
    borderRadius: 25,
    marginVertical: 10
  },
  textStyle: {
    color: '#d6f3ff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 7
  }
});
