import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PaginationBar from './PaginationBar';
import { Card, Title, Paragraph, Subheading } from 'react-native-paper';

const CarouselOfImages = ({ images }) => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={images}
        removeClippedSubviews={false}
        renderItem={({ item }) => (
          <Card.Cover
            style={styles.imageStyle}
            source={{
              uri: `${item}`
            }}
          />
        )}
        autoplay={true}
        enableSnap
        firstItem={0}
        onSnapToItem={(index) => setActiveSlide(index)}
        sliderWidth={330}
        itemWidth={330}
      />
      <PaginationBar
        activeSlide={activeSlide}
        images={images}
        carouselRef={carouselRef}
      />
    </View>
  );
};

export default CarouselOfImages;

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
