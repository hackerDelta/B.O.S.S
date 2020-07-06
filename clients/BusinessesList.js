import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import axios from 'axios';
import Business from './components/Business';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const BusinessesList = () => {
  const [businesses, setBusinesses] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const getAllBusinessesHook = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/businesses');
      const arrayOfBusinesses = response.data;
      const arrayOfDirections = arrayOfBusinesses.map((business) => ({
        id: business.id,
        title: business.name,
        imageUrl: business.imageUrl,
        longitude: Number(business.longitude),
        latitude: Number(business.latitude),
      }));

      setBusinesses(arrayOfBusinesses);
      setMarkers(arrayOfDirections);
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  };

  const getCurrentLocationHook = async () => {
    try {
      await Permissions.askAsync(Permissions.LOCATION);

      const currentLocation = await Location.getCurrentPositionAsync();

      setLocation(currentLocation);
    } catch (err) {
      setErrorMessage('Permission to access location was denied!');
    }
  };

  useEffect(() => {
    getCurrentLocationHook();

    if (!errorMessage) {
      getAllBusinessesHook();
    }
  }, []);

  return (
    <ScrollView>
      <Title style={styles.titleStyle}>Businesses</Title>
      <Text style={styles.errorStyle}>{errorMessage}</Text>
      {location ? (
        <View>
          <MapView
            style={{
              alignSelf: 'stretch',
              height: 500,
              marginTop: 40,
              marginLeft: 20,
              marginRight: 20,
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.92,
              longitudeDelta: 0.92,
            }}
            zoomEnabled={true}
            scrollEnabled={true}
            showCompass={true}
            rotateEnabled={false}
          >
            {markers.map((marker) => (
              <Marker
                key={marker.id}
                coordinate={marker}
                title={marker.title}
              />
            ))}
          </MapView>
          {businesses.map((business) => (
            <Business key={business.id} business={business} />
          ))}
        </View>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: 50,
    paddingTop: 10,
    fontSize: 40,
    textAlign: 'center',
  },
  errorStyle: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default BusinessesList;
