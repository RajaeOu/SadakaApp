import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://images.pexels.com/photos/271168/pexels-photo-271168.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6994962/pexels-photo-6994962.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6591152/pexels-photo-6591152.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8042425/pexels-photo-8042425.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <View>
      <SliderBox
  images={images}
  autoPlay
  autoplayInterval={3000}
  circleLoop
  dotColor="#13274F"
  inactiveDotColor="#90A4AE"
  ImageComponentStyle={{
    borderRadius: 6,
    width: "94%",
    marginTop: 10,
  }}
/>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
