import React from 'react';
import { Pagination } from 'react-native-snap-carousel';
import CarouselPaginationBar from './CarouselPaginationBar';

const PaginationBar = ({ activeSlide, images, carouselRef }) => {
  return (
    <Pagination
      carouselRef={carouselRef}
      dotsLength={images ? images.length : 0}
      activeDotIndex={activeSlide}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'lightgray'
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
      dotElement={
        <CarouselPaginationBar width={10} carouselRef={carouselRef} />
      }
      inactiveDotElement={
        <CarouselPaginationBar width={10} carouselRef={carouselRef} inactive />
      }
    />
  );
};

export default PaginationBar;
