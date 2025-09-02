import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import CropCard from '../../components/CropCard';

const popularItems = [
  { id: '1', title: 'Organic Tomato', price: '$2.99/lb', image: 'https://picsum.photos/200/300?random=9' },
  { id: '2', title: 'Fresh Strawberry', price: '$4.99/lb', image: 'https://picsum.photos/200/300?random=10' },
  { id: '3', title: 'Avocado', price: '$1.99/each', image: 'https://picsum.photos/200/300?random=11' },
  { id: '4', title: 'Sweet Corn', price: '$0.79/each', image: 'https://picsum.photos/200/300?random=12' },
];

const events = [
  { id: '1', title: 'Farmers Market Day', date: '2025-09-15', image: 'https://picsum.photos/400/200?random=13' },
  { id: '2', title: 'Organic Farming Workshop', date: '2025-09-22', image: 'https://picsum.photos/400/200?random=14' },
];

const categories = [
    { id: '1', title: 'Vegetables', icon: 'local-florist' },
    { id: '2', title: 'Fruits', icon: 'local-grocery-store' },
    { id: '3', title: 'Dairy', icon: 'local-drink' },
    { id: '4', title: 'Bakery', icon: 'cake' },
];


const HomeScreen = () => {
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

        {/* Banner Section */}
        <View style={styles.bannerContainer}>
            <Image source={{uri: 'https://picsum.photos/600/300?random=1'}} style={styles.banner} />
        </View>

        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categoriesContainer}>
            {categories.map(category => (
                <TouchableOpacity key={category.id} style={styles.categoryCard}>
                    <MaterialIcons name={category.icon} size={32} color="#2196F3" />
                    <Text style={styles.categoryTitle}>{category.title}</Text>
                </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Popular Items Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <FlatList
            data={popularItems}
            renderItem={({ item }) => <CropCard item={item} />}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
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
        backgroundColor: '#fff',
    },
    header: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchBarContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    searchBar: {
        backgroundColor: '#f5f5f5',
        padding: 16,
        borderRadius: 8,
        fontSize: 16,
    },
    bannerContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    banner: {
        width: '100%',
        height: 150,
        borderRadius: 8,
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
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingHorizontal: 16,
    },
    categoryCard: {
        width: '45%',
        backgroundColor: '#f5f5f5',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    eventCard: {
        marginHorizontal: 16,
        marginBottom: 16,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        overflow: 'hidden',
    },
    eventImage: {
        width: '100%',
        height: 120,
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
    },
    footerLink: {
        fontSize: 14,
        color: '#2196F3',
    },
});

export default HomeScreen;