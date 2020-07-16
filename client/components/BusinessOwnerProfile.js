import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import BusinessCard from './BusinessCard';
import { connect } from 'react-redux';
import { fetchOwnerFromServer } from '../store/owner';
import { Actions } from 'react-native-router-flux';

const BusinessOwnerProfile = ({ id, owner, fetchOwner }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const getBusinessesOwnedHook = () => {
    try {
      fetchOwner(id);
    } catch (error) {
      setErrorMessage("Couldn't get businesses owned :(");
    }
  };

  useEffect(() => {
    getBusinessesOwnedHook();
  }, []);

  const profileText = owner.profile ? (
    <Paragraph style={styles.paragraphStyle}>{owner.profile}</Paragraph>
  ) : (
    <Paragraph style={styles.paragraphStyle}>
      Unfortunately, {owner.firstName} has not submitted profile information yet
    </Paragraph>
  );

  const showBusinessesOwned =
    Object.keys(owner).length && owner.businesses.length ? (
      <View>
        {owner.businesses.map((business) => (
          <TouchableOpacity
            key={business.id}
            activeOpacity={1.0}
            onPress={() => Actions.business({ id: business.id })}
          >
            <BusinessCard business={business} />
          </TouchableOpacity>
        ))}
      </View>
    ) : null;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.backgroundStyle}>
          <View style={styles.container}>
            <Card.Cover
              style={styles.imageStyle}
              source={{ uri: `${owner.image}` }}
            />
            <Card.Title
              title={`${owner.firstName} ${owner.lastName}`}
              titleStyle={styles.titleStyle}
            />
            <Text style={styles.textStyle}>About Me</Text>
            {profileText}
          </View>
        </View>
        <Text style={{ paddingBottom: '0%', ...styles.textStyle }}>
          Businesses Owned by {owner.firstName}
        </Text>
        <Text style={styles.errorStyle}>{errorMessage}</Text>
        {showBusinessesOwned}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapState = (state) => {
  return {
    owner: state.owner
  };
};

const mapDispatch = (dispatch) => ({
  fetchOwner: (id) => dispatch(fetchOwnerFromServer(id))
});

export default connect(mapState, mapDispatch)(BusinessOwnerProfile);

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '10%',
    paddingTop: '5%',
    paddingBottom: '5%',
    textAlign: 'center'
  },
  container: {
    flex: 1
  },
  errorStyle: {
    color: 'red',
    textAlign: 'center',
    marginTop: '1%',
    fontWeight: 'bold'
  },
  imageStyle: {
    fontSize: 18,
    marginLeft: '5%',
    marginRight: '5%'
  },
  paragraphStyle: {
    fontSize: 15,
    textAlign: 'center'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '5%'
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
