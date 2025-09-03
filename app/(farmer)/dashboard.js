import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const DashboardButton = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <MaterialIcons name={icon} size={40} color="#4CAF50" />
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const listedCrops = [
  { id: '1', title: 'Organic Carrots', price: '$1.50/lb', views: 120, image: 'https://picsum.photos/200/200?random=51' },
  { id: '2', title: 'Fresh Potatoes', price: '$0.80/lb', views: 200, image: 'https://picsum.photos/200/200?random=52' },
  { id: '3', title: 'Sweet Corn (per dozen)', price: '$4.00', views: 80, image: 'https://picsum.photos/200/200?random=53' },
  { id: '4', title: 'Green Beans', price: '$2.20/lb', views: 150, image: 'https://picsum.photos/200/200?random=54' },
];

const CropListItem = ({ item }) => (
  <View style={styles.cropListItem}>
    <Image source={{ uri: item.image }} style={styles.cropImage} />
    <View style={styles.cropDetails}>
      <Text style={styles.cropTitle}>{item.title}</Text>
      <Text style={styles.cropPrice}>{item.price}</Text>
      <View style={styles.cropViews}>
        <MaterialIcons name="visibility" size={16} color="#888" />
        <Text style={styles.cropViewsText}>{item.views} views</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.cropEditButton}>
      <MaterialIcons name="edit" size={24} color="#2196F3" />
    </TouchableOpacity>
  </View>
);

const FarmerDashboard = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Farmer Dashboard</Text>

        <View style={styles.grid}>
          <DashboardButton
            icon="add-circle-outline"
            text="Add Crops"
            onPress={() => console.log('Add Crops')}
          />
          <DashboardButton
            icon="edit"
            text="Update Crops"
            onPress={() => console.log('Update Crops')}
          />
          <DashboardButton
            icon="attach-money"
            text="Latest Price"
            onPress={() => console.log('Latest Price')}
          />
          <DashboardButton
            icon="analytics"
            text="Analytics"
            onPress={() => console.log('Analytics')}
          />
          <DashboardButton
            icon="shopping-cart"
            text="View Orders"
            onPress={() => console.log('View Orders')}
          />
          <DashboardButton
            icon="school"
            text="Workshops"
            onPress={() => console.log('Workshops')}
          />
          <DashboardButton
            icon="message"
            text="Messages"
            onPress={() => router.push('/(farmer)/chat')}
          />
          <DashboardButton
            icon="settings"
            text="App Settings"
            onPress={() => console.log('App Settings')}
          />
          <DashboardButton
            icon="logout"
            text="Logout"
            onPress={() => router.replace('/login')}
          />
        </View>

        <View style={styles.listedCropsSection}>
          <Text style={styles.sectionTitle}>My Listed Crops</Text>
          <FlatList
            data={listedCrops}
            renderItem={({ item }) => <CropListItem item={item} />}
            keyExtractor={item => item.id}
            scrollEnabled={false} // Disable FlatList scrolling as it's inside a ScrollView
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollViewContent: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#fff',
    width: '30%', // Adjusted for 3 columns
    aspectRatio: 1, // Make it square
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: '1.5%', // For spacing between buttons
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#333',
    textAlign: 'center',
  },
  listedCropsSection: {
    width: '100%',
    marginTop: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  cropListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cropImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  cropDetails: {
    flex: 1,
  },
  cropTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cropPrice: {
    fontSize: 16,
    color: '#4CAF50',
    marginTop: 4,
  },
  cropViews: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  cropViewsText: {
    fontSize: 14,
    color: '#888',
    marginLeft: 4,
  },
  cropEditButton: {
    padding: 8,
  },
});

export default FarmerDashboard;