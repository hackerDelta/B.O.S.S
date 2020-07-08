import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Review from './Review';
import axios from 'axios';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const getAllReviewsHook = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/comments');
      const arrayOfReviews = response.data;

      setReviews(arrayOfReviews);
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  };

  useEffect(() => {
    getAllReviewsHook();
  }, []);

  return (
    <View style={styles.backgroundStyle}>
      {reviews.map((review) => (
        <Review key={review.title} review={review} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    margin: '5%',
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center'
  },
  textStyle: {
    textAlign: 'center'
  },
  imageStyle: {
    flex: 1,
    margin: '10%',
    fontSize: 18
  }
});

export default Reviews;
