import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';
import Comment from './Comment';
import Comments from './Comments';
import { Rating } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const CommentsList = ({ arrayOfComments, business }) => {
  const output = arrayOfComments.length ? (
    <View>
      {arrayOfComments.map((comments) => {
        return comments.length === 1 ? (
          <View style={styles.containerStyle}>
            <Comment
              key={comments[0].title}
              information={comments[0]}
              type="regular"
            />
          </View>
        ) : (
          <Comments key={comments[0].name} comments={comments} />
        );
      })}
    </View>
  ) : null;

  return (
    <View style={styles.backgroundStyle}>
      <Title style={styles.textStyle}>Recommended Reviews</Title>
      <View style={styles.containerStyle}>
        <TouchableOpacity onPress={() => Actions.commentForm({ business })}>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={20}
            ratingColor="lightgray"
            ratingTextColor="lightgray"
            startingValue={0}
            readonly={true}
            style={styles.starStyle}
          />
          <Paragraph style={styles.paragraphStyle}>Tap to review...</Paragraph>
        </TouchableOpacity>
      </View>
      {output}
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

export default CommentsList;
