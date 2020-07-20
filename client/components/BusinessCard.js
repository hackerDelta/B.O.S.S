import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { removeBusinessFromServer } from '../store/business';
import { connect } from 'react-redux';

const BusinessCard = ({ business, user, removeBusiness }) => {
  const { name, address, city, state, postalCode, phone, images } = business;
  const image = images.length
    ? images[0]
    : 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png';
  const handleRemoveClick = (id) => {
    removeBusiness(id);
  };

  // const user = state.user;

  return (
    <View style={styles.backgroundStyle}>
      {user && user.isAdmin ? (
        <IconButton
          size={20}
          icon="close"
          onPress={() => handleRemoveClick(business.id)}
          accessibilityLabel="close"
        />
      ) : null}
      <Title style={styles.textStyle}>{name}</Title>
      <Paragraph
        style={styles.paragraphStyle}
      >{`${address} \n${city}, ${state} ${postalCode} \n ${phone}`}</Paragraph>
      <Card.Cover style={styles.imageStyle} source={{ uri: `${image}` }} />
    </View>
  );
};

const mapState = (state) => {
  return {
    user: state.user
  };
};

const mapDispatch = (dispatch) => ({
  removeBusiness: (id) => dispatch(removeBusinessFromServer(id))
});

export default connect(mapState, mapDispatch)(BusinessCard);

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
