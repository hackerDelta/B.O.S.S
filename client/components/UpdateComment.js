import React from 'react';
import { View } from 'react-native';
import Comment from './Comment';
import uuid from 'react-native-uuid';

const UpdateComment = ({ comment }) => {
  const output = comment ? (
    <View>
      <Comment key={uuid.v4()} information={comment} type="update" />
    </View>
  ) : null;

  return <View>{output}</View>;
};

export default UpdateComment;
