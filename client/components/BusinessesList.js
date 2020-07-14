import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { Title } from 'react-native-paper';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Business from './Business';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { fetchBusinessesFromServer } from '../store/businesses';

const BusinessesList = ({ businesses, fetchBusinesses }) => {
  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const getAllBusinessesHook = () => {
    try {
      fetchBusinesses();
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  };

  const createMarkersHook = () => {
    const arrayOfDirections = businesses.map((business) => ({
      id: business.id,
      title: business.name,
      images: business.images[0],
      longitude: Number(business.longitude),
      latitude: Number(business.latitude)
    }));

    setMarkers(arrayOfDirections);
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

  useEffect(() => {
    createMarkersHook();
  }, [businesses]);

  const output = location ? (
    <View>
      <MapView
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
        zoomEnabled={true}
        scrollEnabled={true}
        showCompass={true}
        rotateEnabled={false}
      >
        {markers.map((marker) => (
          <Marker key={marker.id} coordinate={marker} title={marker.title} />
        ))}
      </MapView>
      {businesses.map((business) => (
        <TouchableOpacity
          key={business.id}
          activeOpacity={1.0}
          onPress={() => Actions.business({ id: business.id })}
        >
          <Business business={business} />
        </TouchableOpacity>
      ))}
    </View>
  ) : null;

  return (
    <SafeAreaView>
      <ScrollView>
        <Title style={styles.titleStyle}>Businesses</Title>
        <Text style={styles.errorStyle}>{errorMessage}</Text>
        {output}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapState = (state) => {
  return {
    businesses: state.businesses
  };
};

const mapDispatch = (dispatch) => ({
  fetchBusinesses: () => dispatch(fetchBusinessesFromServer())
});

export default connect(mapState, mapDispatch)(BusinessesList);

const styles = StyleSheet.create({
  mapStyle: {
    alignSelf: 'stretch',
    height: 500,
    margin: '5%'
  },
  titleStyle: {
    marginTop: '12%',
    paddingTop: '5%',
    fontSize: 40,
    textAlign: 'center'
  },
  errorStyle: {
    color: 'red',
    textAlign: 'center',
    marginTop: '1%',
    fontWeight: 'bold'
  }
});
