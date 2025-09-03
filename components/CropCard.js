
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CropCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.overlay} />
        <Text style={styles.titleOnImage}>{item.title}</Text>
        <Text style={styles.priceOnImage}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden', // Ensure content respects borderRadius
  },
  imageContainer: {
    width: '100%',
    height: 150, // Increased height to accommodate text
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8, // Apply border radius to the image itself
    shadowColor: '#000', // Drop shadow for the image
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)', // Semi-transparent black overlay
    borderRadius: 8,
  },
  titleOnImage: {
    position: 'absolute',
    bottom: 30,
    left: 8,
    right: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  priceOnImage: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
    fontSize: 14,
    color: '#fff',
  },
});

export default CropCard;
