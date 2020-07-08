import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import StarRating from 'react-native-star-rating';

const Comment = ({ information }) => {
  const { title, comment, stars } = information;

  return (
    <View style={styles.backgroundStyle}>
      <Title>{title}</Title>
      <StarRating
        disabled={false}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={stars}
        starSize={20}
        fullStarColor={'red'}
      />
      <Paragraph>{comment}</Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  backgroundStyle: {
    margin: '5%',
    backgroundColor: '#F0EEEE',
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

export default Comment;
