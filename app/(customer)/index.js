import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import CropCard from '../../components/CropCard';
import { useRouter } from 'expo-router'; // Import useRouter

const featuredProducts = [
  { id: '1', title: 'Organic Apples', price: '$3.99/lb', image: 'https://picsum.photos/200/300?random=1', description: 'Fresh organic apples from local farms.', location: 'Farm A', season: 'Autumn', availability: '500 lbs', farmerName: 'Farmer Bob', farmerContact: 'bob@example.com' },
  { id: '2', title: 'Fresh Broccoli', price: '$2.49/lb', image: 'https://picsum.photos/200/300?random=2', description: 'Crisp and fresh broccoli, perfect for healthy meals.', location: 'Farm B', season: 'Spring', availability: '300 lbs', farmerName: 'Farmer Alice', farmerContact: 'alice@example.com' },
  { id: '3', title: 'Farm Eggs (1 Dozen)', price: '$4.50', image: 'https://picsum.photos/200/300?random=3', description: 'Free-range farm eggs, rich in flavor.', location: 'Farm C', season: 'All Year', availability: '100 dozens', farmerName: 'Farmer Charlie', farmerContact: 'charlie@example.com' },
  { id: '4', title: 'Local Honey', price: '$8.00/jar', image: 'https://picsum.photos/200/300?random=4', description: 'Pure local honey, harvested from our own beehives.', location: 'Farm D', season: 'Summer', availability: '50 jars', farmerName: 'Farmer David', farmerContact: 'david@example.com' },
];

const popularItems = [
  { id: '1', title: 'Organic Tomato', price: '$2.99/lb', image: 'https://picsum.photos/200/300?random=5', description: 'Juicy organic tomatoes, great for salads.', location: 'Farm E', season: 'Summer', availability: '200 lbs', farmerName: 'Farmer Eve', farmerContact: 'eve@example.com' },
  { id: '2', title: 'Fresh Strawberry', price: '$4.99/lb', image: 'https://picsum.photos/200/300?random=6', description: 'Sweet and ripe strawberries, hand-picked daily.', location: 'Farm F', season: 'Spring', availability: '150 lbs', farmerName: 'Farmer Frank', farmerContact: 'frank@example.com' },
  { id: '3', title: 'Avocado', price: '$1.99/each', image: 'https://picsum.photos/200/300?random=7', description: 'Creamy avocados, perfect for guacamole.', location: 'Farm G', season: 'All Year', availability: '100 pieces', farmerName: 'Farmer Grace', farmerContact: 'grace@example.com' },
  { id: '4', title: 'Sweet Corn', price: '$0.79/each', image: 'https://picsum.photos/200/300?random=8', description: 'Delicious sweet corn, fresh from the field.', location: 'Farm H', season: 'Summer', availability: '300 pieces', farmerName: 'Farmer Harry', farmerContact: 'harry@example.com' },
];

const events = [
  { id: '1', title: 'Farmers Market Day', date: '2025-09-15', image: 'https://picsum.photos/400/200?random=9' },
  { id: '2', title: 'Organic Farming Workshop', date: '2025-09-22', image: 'https://picsum.photos/400/200?random=10' },
];

const categories = [
    { id: '1', title: 'Vegetables', icon: 'local-florist' },
    { id: '2', title: 'Fruits', icon: 'local-grocery-store' },
    { id: '3', title: 'Dairy', icon: 'local-drink' },
    { id: '4', title: 'Bakery', icon: 'cake' },
    { id: '5', title: 'Grains', icon: 'grain' },
    { id: '6', title: 'Meat', icon: 'fast-food' },
];


const HomeScreen = () => {
  const router = useRouter();

  const handleProductPress = (item) => {
    console.log('Product pressed:', item.title);
    router.push({
      pathname: `/(tabs)/product/${item.id}`,
      params: {
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        description: item.description,
        location: item.location,
        season: item.season,
        availability: item.availability,
        farmerName: item.farmerName,
        farmerContact: item.farmerContact,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hi, Username</Text>
          <TouchableOpacity>
            <MaterialIcons name="notifications-none" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBarContainer}>
          <TextInput style={styles.searchBar} placeholder="Search for products..." />
        </View>

        {/* Main Banner/Hero Section */}
        <View style={styles.mainBannerContainer}>
            <Image source={{uri: 'https://picsum.photos/800/400?random=11'}} style={styles.mainBanner} />
            <View style={styles.mainBannerOverlay}>
                <Text style={styles.mainBannerTitle}>Fresh from the Farm</Text>
                <Text style={styles.mainBannerSubtitle}>Directly to your table</Text>
                <TouchableOpacity style={styles.shopNowButton}>
                    <Text style={styles.shopNowButtonText}>Shop Now</Text>
                </TouchableOpacity>
            </View>
        </View>

        {/* Shop by Category (Grid) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shop by Category</Text>
          <View style={styles.categoriesGrid}>
            {categories.map(category => (
                <TouchableOpacity key={category.id} style={styles.categoryGridItem}>
                    <MaterialIcons name={category.icon} size={40} color="#2196F3" />
                    <Text style={styles.categoryGridText}>{category.title}</Text>
                </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Featured Products Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <FlatList
            data={featuredProducts}
            renderItem={({ item }) => <CropCard item={item} onPress={() => handleProductPress(item)} />} // Pass onPress
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 16 }}
          />
        </View>

        {/* Popular Items Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <FlatList
            data={popularItems}
            renderItem={({ item }) => <CropCard item={item} onPress={() => handleProductPress(item)} />} // Pass onPress
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 16 }}
          />
        </View>

        {/* Events Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          {events.map(event => (
            <TouchableOpacity key={event.id} style={styles.eventCard}>
              <Image source={{uri: event.image}} style={styles.eventImage} />
              <View style={styles.eventDetails}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventDate}>{event.date}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Important Links Section */}
        <View style={styles.footer}>
            <TouchableOpacity><Text style={styles.footerLink}>About Us</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.footerLink}>Contact Us</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.footerLink}>FAQ</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.footerLink}>Privacy Policy</Text></TouchableOpacity>
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
    header: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchBarContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
        backgroundColor: '#fff',
    },
    searchBar: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 8,
        fontSize: 16,
    },
    mainBannerContainer: {
        height: 200,
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
    },
    mainBanner: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    mainBannerOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    mainBannerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 8,
    },
    mainBannerSubtitle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 16,
    },
    shopNowButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    shopNowButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    section: {
        paddingBottom: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        paddingHorizontal: 16,
    },
    categoriesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingHorizontal: 16,
    },
    categoryGridItem: {
        width: '45%',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    categoryGridText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
        textAlign: 'center',
    },
    eventCard: {
        marginHorizontal: 16,
        marginBottom: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    eventImage: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
    },
    eventDetails: {
        padding: 16,
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    eventDate: {
        fontSize: 14,
        color: '#888',
        marginTop: 4,
    },
    footer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
    },
    footerLink: {
        fontSize: 14,
        color: '#2196F3',
    },
});

export default HomeScreen;
