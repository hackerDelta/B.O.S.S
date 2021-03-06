import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { IconButton, Button } from 'react-native-paper';
import { Rating } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux';
import { createCommentFromServer } from '../store/comments';

const CommentForm = ({ business, user, createComment }) => {
  const prompt = () => Actions.prompt();
  const userId = user ? user.id : null;
  const businessId = business.id;
  const { name } = business;
  const [errorMessage, setErrorMessage] = useState('');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [stars, setStars] = useState(0);
  const [photo, setPhoto] = useState('');

  const handleSubmitClick = () => {
    if (!userId) {
      Actions.prompt();
    } else {
      createComment(businessId, {
        businessId,
        userId,
        title,
        comment,
        stars,
        photo
      });
      Actions.business({ id: businessId });
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        base64: true,
        aspect: [4, 3],
        quality: 1
      });

      if (!result.cancelled) {
        setPhoto(result.base64);
      }
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      } else {
        pickImage();
      }
    }
  };

  return (
    <View style={styles.container}>
      <IconButton
        style={{ alignSelf: 'flex-end' }}
        icon="close"
        onPress={() => Actions.pop()}
        accessibilityLabel="close"
      />
      <Text style={styles.title}>{name}</Text>
      <View>
        <Rating
          type="custom"
          ratingCount={5}
          imageSize={20}
          startingValue={0}
          readonly={false}
          style={{
            alignSelf: 'flex-start',
            marginTop: '5%',
            marginBottom: '5%'
          }}
          onFinishRating={(rating) => setStars(rating)}
        />
        <TextInput
          placeholder="Great!"
          autoCapitalize="none"
          style={{
            marginBottom: '5%',
            height: 20,
            borderColor: 'gray',
            borderWidth: 1
          }}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          placeholder="This is my favorite restaurant! The food is fantastic. :)"
          multiline
          value={comment}
          onChangeText={(text) => setComment(text)}
          style={{ height: 150, borderColor: 'gray', borderWidth: 1 }}
        />
        <IconButton
          style={{ alignSelf: 'flex-start' }}
          icon="camera"
          onPress={getPermissionAsync}
          accessibilityLabel="choose an image"
        />

        {photo ? (
          <View style={{ alignItems: 'flex-start' }}>
            <IconButton
              size={15}
              icon="close"
              onPress={() => setPhoto('')}
              accessibilityLabel="close"
            />
            <Image
              key={photo}
              style={styles.imageStyle}
              width={100}
              height={100}
              source={{ uri: `data:image/jpeg;base64,${photo}` }}
            />
          </View>
        ) : null}
        <TouchableOpacity style={styles.button} onPress={handleSubmitClick}>
          <Text style={styles.textStyle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapState = (state) => {
  return {
    business: state.business,
    user: state.user
  };
};

const mapDispatch = (dispatch) => ({
  createComment: (businessId, userId, title, comment, stars) =>
    dispatch(createCommentFromServer(businessId, userId, title, comment, stars))
});

export default connect(mapState, mapDispatch)(CommentForm);

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: '10%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: 'white'
  },
  container: {
    marginTop: '15%',
    marginLeft: '5%',
    marginRight: '5%',
    padding: '1%'
  },
  input: {
    margin: '5%',
    borderRadius: 5,
    borderWidth: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: '3%'
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    marginTop: 6
  },
  textStyle: {
    color: '#d6f3ff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 7
  },
  button: {
    backgroundColor: '#144d62',
    borderRadius: 25,
    marginVertical: 10
  }
});
