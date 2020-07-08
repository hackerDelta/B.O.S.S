import * as React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Business from './Business';
import moment from 'moment';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const SingleBusiness = ({ route, navigation }) => {
  const { business } = route.params;
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
    isClosed
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
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontWeight: 'bold' }}>Location and Hours</Text>
      {daysOfTheWeek.map((day, index) =>
        !hoursOpened[index] ? (
          <Text key={day}>{day} Closed</Text>
        ) : (
          <Text
            key={day}
          >{`${day} ${hoursOpened[index].start} - ${hoursOpened[index].end}`}</Text>
        )
      )}
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.backgroundStyle}>
        <Title style={styles.textStyle}>{name}</Title>
        <Paragraph
          style={styles.textStyle}
        >{`${address} \n${city}, ${state} ${postalCode} \n ${phone}`}</Paragraph>
        {hoursOutput}
        <Card.Cover style={styles.imageStyle} source={{ uri: `${imageUrl}` }} />
        <MapView
          style={{
            alignSelf: 'stretch',
            height: 500,
            marginTop: 40,
            marginLeft: 20,
            marginRight: 20
          }}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    margin: '10%',
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center'
  },
  textStyle: {
    textAlign: 'center'
  },
  imageStyle: {
    margin: '5%',
    fontSize: 18
  }
});

export default SingleBusiness;
