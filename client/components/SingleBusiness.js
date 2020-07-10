import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import moment from 'moment';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Comments from './Comments';
import { Rating } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const SingleBusiness = ({ business }) => {
  const {
    latitude,
    longitude,
    name,
    address,
    city,
    state,
    postalCode,
    phone,
    imageUrl,
    hours,
    isClosed,
    comments
  } = business;
  const JSONifiedHours = JSON.parse(hours)[0];
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
  const calculatedTotalRating = comments.length
    ? comments.reduce(
        (accumulator, comment) => accumulator + comment.stars,
        0
      ) / comments.length
    : 0;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.backgroundStyle}>
          <Title style={styles.titleStyle}>{name}</Title>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={20}
            startingValue={calculatedTotalRating}
            readonly={true}
          />
          <Card.Cover
            style={styles.imageStyle}
            source={{ uri: `${imageUrl}` }}
          />
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
          <Comments comments={comments} business={business} />
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Text style={styles.textSign}>Go back!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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

export default SingleBusiness;
