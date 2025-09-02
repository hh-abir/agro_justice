
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CropCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
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
  },
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
  },
  price: {
    fontSize: 14,
    color: '#888',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});

export default CropCard;
