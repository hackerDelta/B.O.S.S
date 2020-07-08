import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Comment from './Comment';

const Comments = ({ comments }) => {
  return (
    <View style={styles.backgroundStyle}>
      {comments.map((comment) => (
        <Comment key={comment.title} information={comment} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    margin: '5%',
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center'
  },
  textStyle: {
    textAlign: 'center'
  },
  imageStyle: {
    flex: 1,
    margin: '10%',
    fontSize: 18
  }
});

export default Comments;
