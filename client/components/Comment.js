import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { Rating } from 'react-native-elements';
import btoa from 'btoa';

const Comment = ({ information }) => {
  const { title, comment, stars, user, photos } = information;
  const { firstName, lastName, image } = user;
  const photosOutput =
    photos && photos.length
      ? photos.map((photo) => {
          console.log('YUP', photo);
          return (
            <Image
              key={photo}
              style={styles.photoStyle}
              source={{ uri: `data:image/jpeg;base64` }}
            />
          );
        })
      : null;

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
      {photosOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    margin: '5%',
    marginBottom: '3%'
  },
  photoStyle: {
    width: 100,
    height: 100,
    margin: '10%'
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
