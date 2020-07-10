import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Formik } from 'formik';
import { IconButton, Button } from 'react-native-paper';
import * as yup from 'yup';
import { Rating } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import * as Permissions from 'expo-permissions';

const FormSchema = yup.object({
  title: yup
    .string()
    .required('The title field is required!')
    .min(1, 'The title field is too short!')
    .max(100, 'The title field is too long'),
  text: yup
    .string()
    .required('The text field is required!')
    .min(8, 'The text is too short!')
    .max(5000, 'The text is too long!'),
  stars: yup.number()
});

const CommentForm = ({ business }) => {
  const { name, comments } = business;
  const handleSubmitClick = (userId, title, text, stars) => () => {
    console.log('clicked');
    console.log(title, text, stars);
  };

  return (
    <View style={styles.container}>
      <IconButton
        style={{ alignSelf: 'flex-end' }}
        icon="close"
        onPress={() => Actions.pop()}
        accessibilityLabel="close"
      />

      <Text style={styles.title}>{name}</Text>
      <Formik
        initialValues={{ title: '', text: '', stars: 0 }}
        onSubmit={(values, actions) => {
          actions.resetForm();
        }}
        validationSchema={FormSchema}
      >
        {(props) => (
          <View>
            <Rating
              type="custom"
              ratingCount={5}
              imageSize={20}
              startingValue={0}
              readonly={false}
              onChangeText={props.handleChange('rating')}
              style={{
                alignSelf: 'flex-start',
                marginTop: '5%',
                marginBottom: '5%'
              }}
            />
            <TextInput
              placeholder=""
              style={{ height: 20, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={props.handleChange('title')}
              onBlur={props.handleBlur('title')}
            />
            <Text style={styles.errorText}>{props.errors.title}</Text>
            <TextInput
              multiline
              onChangeText={props.handleChange('text')}
              onBlur={props.handleBlur('text')}
              style={{ height: 150, borderColor: 'gray', borderWidth: 1 }}
            />
            <Text style={styles.errorText}>{props.errors.text}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                handleSubmitClick(
                  '1',
                  props.values.title,
                  props.values.text,
                  props.values.stars
                )
              }
            >
              <Text style={styles.textStyle}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: '10%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: 'white'
  },
  container: {
    marginTop: '15%',
    marginLeft: '5%',
    marginRight: '5%',
    padding: '1%'
  },
  input: {
    marginBottom: '5%',
    borderRadius: 5,
    borderWidth: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: '3%'
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    marginTop: 6
  },
  textStyle: {
    color: '#d6f3ff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 7
  },
  button: {
    backgroundColor: '#144d62',
    borderRadius: 25,
    marginVertical: 10
  }
});

export default CommentForm;
