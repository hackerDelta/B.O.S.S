import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { Card, Title, Paragraph, Subheading } from 'react-native-paper';
import moment from 'moment';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import CommentsList from './CommentsList';
import { Rating } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { fetchBusinessFromServer, unmountBusiness } from '../store/business';
import { fetchCommentsFromServer } from '../store/comments';
import CarouselOfImages from './CarouselOfImages';
import Loading from './Loading';

const SingleBusiness = (props) => {
  const { id, fetchBusiness, destroy, fetchComments } = props;
  let { business } = props;
  const comments = props.comments;

  useEffect(() => {
    fetchComments(id);
    // return () => destroy();
  }, [comments.length]);

  useEffect(() => {
    fetchBusiness(id);
    return () => destroy();
  }, []);

  const {
    latitude,
    longitude,
    name,
    address,
    city,
    state,
    postalCode,
    phone,
    images,
    hours,
    isClosed,
    owner
  } = business;

  const commentsHash = {};

  if (comments.length) {
    comments.map((currentComment) => {
      if (commentsHash[currentComment.user.id]) {
        commentsHash[currentComment.user.id].unshift(currentComment);
      } else {
        commentsHash[currentComment.user.id] = [currentComment];
      }
    });
  }

  const arrayOfComments = [];
  for (let userId in commentsHash) {
    const commentsOfUser = commentsHash[userId];

    arrayOfComments.unshift(commentsOfUser);
  }

  arrayOfComments.sort((a, b) => b[0].updatedAt - a[0].updatedAt);

  const JSONifiedHours = hours ? JSON.parse(hours)[0] : { open: [] };
  const hoursOpened = [];
  JSONifiedHours.open.forEach(
    ({ day, start, end }) =>
      (hoursOpened[Number(day)] = {
        start: moment(start, 'HH:mm').format('h:mm a'),
        end: moment(end, 'HH:mm').format('h:mm a')
      })
  );
  const daysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hoursOutput = isClosed ? (
    <Text>Users report this location has closed.</Text>
  ) : (
    <View>
      <Text style={styles.hourStyle}>Hours</Text>
      {daysOfTheWeek.map((day, index) =>
        !hoursOpened[index] ? (
          <Text key={day} style={styles.paragraphStyle}>
            {day} Closed
          </Text>
        ) : (
          <Text
            style={styles.paragraphStyle}
            key={day}
          >{`${day} ${hoursOpened[index].start} - ${hoursOpened[index].end}`}</Text>
        )
      )}
    </View>
  );
  const calculatedTotalRating =
    arrayOfComments && arrayOfComments.length
      ? arrayOfComments.reduce(
          (accumulator, comments) => accumulator + comments[0].stars,
          0
        ) / arrayOfComments.length
      : 0;

  const ownerInfo = owner ? (
    <TouchableOpacity
      style={styles.ownerName}
      onPress={() => Actions.ownerProfile({ id: owner.id })}
    >
      <Subheading>
        Owner: {owner.firstName} {owner.lastName}
      </Subheading>
    </TouchableOpacity>
  ) : null;

  const imageOutput =
    images && !images.length ? (
      <Card.Cover
        style={styles.imageStyle}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'
        }}
      />
    ) : images && images.length === 1 ? (
      <Card.Cover style={styles.imageStyle} source={{ uri: images[0] }} />
    ) : (
      <CarouselOfImages images={business.images || []} />
    );

  if (Object.keys(business).length) {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.backgroundStyle}>
            <Title style={styles.titleStyle}>{name}</Title>
            {ownerInfo}
            <Rating
              type="custom"
              ratingCount={5}
              imageSize={20}
              startingValue={calculatedTotalRating}
              readonly={true}
            />
            {imageOutput}
            <View style={styles.container}>
              <Text style={styles.textStyle}>Location</Text>
              <Paragraph
                style={styles.paragraphStyle}
              >{`${address} \n${city}, ${state} ${postalCode} \n ${phone}`}</Paragraph>
              <MapView
                style={styles.mapStyle}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                region={{
                  latitude: Number(latitude),
                  longitude: Number(longitude),
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.1
                }}
                zoomEnabled={true}
                scrollEnabled={true}
                showCompass={true}
                rotateEnabled={false}
              >
                <Marker
                  coordinate={{
                    latitude: Number(latitude),
                    longitude: Number(longitude)
                  }}
                  title={name}
                />
              </MapView>
            </View>
            {hoursOutput}
            <CommentsList
              arrayOfComments={arrayOfComments}
              business={business}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return <Loading />;
  }
};

const mapState = (state) => {
  return {
    business: state.business,
    comments: state.comments
  };
};

const mapDispatch = (dispatch) => ({
  fetchBusiness: (id) => dispatch(fetchBusinessFromServer(id)),
  destroy: () => dispatch(unmountBusiness()),
  fetchComments: (id) => dispatch(fetchCommentsFromServer(id))
});

export default connect(mapState, mapDispatch)(SingleBusiness);

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
  mapStyle: {
    alignSelf: 'center',
    height: 200,
    width: 300,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  ownerName: {
    alignSelf: 'center'
  },
  starsStyle: {
    alignSelf: 'center'
  },
  container: {
    flex: 1
  },
  titleStyle: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  hourStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '2%'
  },
  paragraphStyle: {
    fontSize: 15,
    textAlign: 'center'
  },
  imageStyle: {
    margin: '5%',
    fontSize: 18
  }
});
