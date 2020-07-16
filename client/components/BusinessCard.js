import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const BusinessCard = ({ business }) => {
  const { name, address, city, state, postalCode, phone, images } = business;
  const image = images.length
    ? images[0]
    : 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png';

  return (
    <View style={styles.backgroundStyle}>
      <Title style={styles.textStyle}>{name}</Title>
      <Paragraph
        style={styles.paragraphStyle}
      >{`${address} \n${city}, ${state} ${postalCode} \n ${phone}`}</Paragraph>
      <Card.Cover style={styles.imageStyle} source={{ uri: `${image}` }} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    margin: '5%',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center'
  },
  textStyle: {
    textAlign: 'center'
  },
  paragraphStyle: {
    textAlign: 'center',
    fontSize: 16
  },
  imageStyle: {
    margin: '5%',
    fontSize: 18
  }
});

export default BusinessCard;
