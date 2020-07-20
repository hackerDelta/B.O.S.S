import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Paragraph, IconButton } from 'react-native-paper';
import { Rating } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { removeCommentFromServer } from '../store/comments';
import { connect } from 'react-redux';

const Comment = (props) => {
  const { removeComment, information, type } = props;
  const {
    id,
    title,
    comment,
    stars,
    user,
    photo,
    createdAt,
    updatedAt
  } = information;
  const { firstName, lastName, image } = user;

  const typeOutput =
    type === 'update' ? (
      <MaterialCommunityIcons name="update" size={15} color="black" />
    ) : null;
  const date =
    updatedAt !== createdAt || type === 'update'
      ? `Updated Review ${new Date(createdAt).toDateString()}`
      : updatedAt === createdAt && type === 'previous'
      ? `Previous Review ${new Date(updatedAt).toDateString()}`
      : `${new Date(updatedAt).toDateString()}`;

  const handleRemoveClick = (id) => {
    removeComment(id);
  };

  return (
    <View>
      <Text>
        {title} {typeOutput} {date}
      </Text>
      {(props.user && props.user.isAdmin) ||
      (props.user && props.user.id === user.id) ? (
        <IconButton
          style={{ alignSelf: 'baseline', margin: 0, padding: 0 }}
          size={20}
          icon="delete"
          onPress={() => handleRemoveClick(id)}
          accessibilityLabel="close"
        />
      ) : null}
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
  containerStyle: {
    margin: '5%',
    marginBottom: '3%',
    textAlign: 'left',
    borderColor: 'lightgray',
    borderWidth: 1,
    padding: '1%'
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

const mapState = (state) => {
  return {
    user: state.user
  };
};

const mapDispatch = (dispatch) => ({
  removeComment: (id) => dispatch(removeCommentFromServer(id))
});

export default connect(mapState, mapDispatch)(Comment);
