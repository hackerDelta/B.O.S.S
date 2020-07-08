import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Title } from 'react-native-paper';
import Comment from './Comment';

const Comments = ({ comments }) => {
  const output = comments.length ? (
    <View>
      <Title style={styles.textStyle}>Recommended Reviews</Title>
      {comments.map((comment) => (
        <Comment key={comment.title} information={comment} />
      ))}
    </View>
  ) : (
    <Text style={styles.textStyle}>No reviews yet! :)</Text>
  );

  return <View style={styles.backgroundStyle}>{output}</View>;
};

const styles = StyleSheet.create({
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
