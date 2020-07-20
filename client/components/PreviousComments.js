import * as React from 'react';
import { View } from 'react-native';
import Comment from './Comment';
import uuid from 'react-native-uuid';

const PreviousComments = ({ comments }) => {
  const output = comments.length
    ? comments.map((comment) => (
        <View key={uuid.v4()}>
          <Comment information={comment} type="previous" />
        </View>
      ))
    : null;

  return <View>{output}</View>;
};

export default PreviousComments;
