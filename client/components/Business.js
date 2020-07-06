import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const Business = ({ business }) => {
  const { name, address, city, state, postalCode, phone, imageUrl } = business;

  return (
    <View style={styles.backgroundStyle}>
      <Title style={{ textAlign: 'center' }}>{name}</Title>
      <Paragraph
        style={{ textAlign: 'center' }}
      >{`${address} \n${city}, ${state} ${postalCode} \n ${phone}`}</Paragraph>
      <Card.Cover style={styles.imageStyle} source={{ uri: `${imageUrl}` }} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    margin: 20,
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center'
  },
  imageStyle: {
    flex: 1,
    margin: 10,
    fontSize: 18
  }
});

export default Business;
