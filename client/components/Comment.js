import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { Rating } from 'react-native-elements';
// import base64 from 'base64-js'
import { FileSystem } from 'expo';

import Base64ArrayBuffer from 'base64-arraybuffer';

// const Buffer = require("buffer").Buffer;
// import base64 from 'react-native-base64'

// import FileSystem from 'expo-file-system'
// import Base64ArrayBuffer from 'base64-arraybuffer';
// import base64js from 'base64-js'
// var binaryToBase64 = require('binaryToBase64');
// import Base64ArrayBuffer from 'base64-arraybuffer';

// import { fs } from 'rn-fetch-blob';

const Comment = ({ information }) => {
  const { title, comment, stars, user, photo } = information;
  const { firstName, lastName, image } = user;

  // const photoURI = photo ? Base64ArrayBuffer.encode(photo.data) : null;
  // console.log(photoURI)
  // const blobToBase64 = async (data, encoding = 'base64') => {
  //   const x = await fs.readFile(data, encoding);
  //   return x;
  // }

  // console.log(photo ? base64.encode(photo.data) : console.log('nope'))

  // const signature = await FileSystem.readAsStringAsync(item.signature, { encoding: FileSystem.EncodingTypes.Base64 })

  const photosOutput = photo ? (
    <Image
      key={photo}
      style={styles.photoStyle}
      source={{
        uri: `data:image/jpeg;base64,${Base64ArrayBuffer.encode(photo.data)}`
      }}
    />
  ) : null;

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
