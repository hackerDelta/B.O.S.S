import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { removeUserFromServer } from '../store/users';
import { connect } from 'react-redux';

const User = ({ currentUser, user, removeUser }) => {
  const { firstName, lastName, email, image } = currentUser;
  const handleRemoveClick = (id) => {
    removeUser(id);
  };

  return (
    <View style={styles.backgroundStyle}>
      {user && user.isAdmin ? (
        <IconButton
          size={20}
          icon="close"
          onPress={() => handleRemoveClick(currentUser.id)}
          accessibilityLabel="close"
        />
      ) : null}
      <Title style={styles.textStyle}>{`${firstName} ${lastName}`}</Title>
      <Paragraph style={styles.paragraphStyle}>{`${email} \n`}</Paragraph>
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
  removeUser: (id) => dispatch(removeUserFromServer(id))
});

export default connect(mapState, mapDispatch)(User);

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
