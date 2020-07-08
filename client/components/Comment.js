import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { Rating } from 'react-native-elements';

const Comment = ({ information }) => {
  const { title, comment, stars, user } = information;
  const { firstName, lastName, image } = user;

  return (
    <View style={styles.backgroundStyle}>
      <Text>{title}</Text>
      <Rating
        type="custom"
        ratingCount={5}
        imageSize={20}
        startingValue={stars}
        readonly={true}
        style={styles.starStyle}
      />
      <Image style={styles.imageStyle} source={{ uri: `${image}` }} />
      <Paragraph>{`${firstName} ${lastName}`}</Paragraph>
      <Paragraph>{comment}</Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    margin: '5%',
    marginBottom: '3%'
  },
  starStyle: {
    alignSelf: 'flex-start',
    marginTop: '2%'
  },
  imageStyle: {
    width: '10%',
    height: 27,
    margin: 0,
    padding: 0
  }
});

export default Comment;
