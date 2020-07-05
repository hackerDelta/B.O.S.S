import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Business from './components/Business';

class BusinessesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:3001/api/businesses');
    this.setState({ businesses: response.data });
  }

  render() {
    console.log('** data', this.state.businesses);
    return (
      <View>
        <Business />
      </View>
    );
  }
}

const style = StyleSheet.create({});

export default BusinessesList;
