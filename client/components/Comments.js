import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import UpdateComment from './UpdateComment';
import PreviousComments from './PreviousComments';
import uuid from 'react-native-uuid';

const Comments = ({ comments }) => {
  const [showPreviousComments, setPreviousComments] = useState(false);
  const updateComment = comments.length ? (
    <UpdateComment key={uuid.v4()} comment={comments[0]} />
  ) : null;
  const previousComments =
    comments.length > 1 ? (
      <PreviousComments key={uuid.v4()} comments={comments.slice(1)} />
    ) : null;

  return (
    <View style={styles.containerStyle}>
      {updateComment}
      <IconButton
        style={{ margin: 0, padding: 0 }}
        icon={
          showPreviousComments ? 'arrow-collapse-up' : 'arrow-collapse-down'
        }
        color="black"
        size={15}
        onPress={() => setPreviousComments(!showPreviousComments)}
      />
      {showPreviousComments ? previousComments : null}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    margin: '5%',
    marginBottom: '3%',
    textAlign: 'left',
    borderColor: 'lightgray',
    borderWidth: 1,
    padding: '1%'
  },
  paragraphStyle: {
    color: 'lightgray'
  },
  starStyle: {
    alignSelf: 'flex-start',
    marginTop: '2%'
  },
  backgroundStyle: {
    marginTop: '10%',
    marginBottom: '10%',
    textAlign: 'center'
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  imageStyle: {
    flex: 1,
    margin: '10%',
    fontSize: 18
  }
});

export default Comments;
