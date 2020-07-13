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
import Business from './Business';

import axios from 'axios';

export default function BusinessOwnerProfile(props) {
  const { owner } = props;

  const [businessesOwned, setBusinessesOwned] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getBusinessesOwnedHook = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/users/${owner.id}`
      );
      const { businesses } = response.data;

      setBusinessesOwned(businesses);
    } catch (error) {
      setErrorMessage("Couldn't get businesses owned :(");
    }
  };

  useEffect(() => {
    getBusinessesOwnedHook();

    return () => {
      setBusinessesOwned([businessesOwned]);
    };
  }, [businessesOwned]);

  const profileText = owner.profile ? (
    <Paragraph style={styles.paragraphStyle}>{owner.profile}</Paragraph>
  ) : (
    <Paragraph style={styles.paragraphStyle}>
      Unfortunately, {owner.firstName} has not submitted profile information yet
    </Paragraph>
  );

  const showBusinessesOwned = businessesOwned.length ? (
    <View>
      {businessesOwned.map((business) => (
        <TouchableOpacity key={business.id}>
          <Business business={business} />
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
}

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
