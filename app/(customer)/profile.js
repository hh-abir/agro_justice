import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const router = useRouter();

  const menuItems = [
    { icon: 'person-outline', text: 'Edit Profile' },
    { icon: 'lock-outline', text: 'Change Password' },
    { icon: 'notifications-none', text: 'Notifications' },
    { icon: 'language', text: 'Language' },
    { icon: 'help-outline', text: 'Help & Support' },
    { icon: 'info-outline', text: 'Terms of Service' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://picsum.photos/200/200?random=20' }}
            style={styles.avatar}
          />
          <Text style={styles.username}>John Doe</Text>
          <Text style={styles.email}>john.doe@example.com</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <MaterialIcons name={item.icon} size={24} color="#555" />
              <Text style={styles.menuItemText}>{item.text}</Text>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="#555" />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.button, styles.logoutButton]}
          onPress={() => router.replace('/login')}
        >
          <MaterialIcons name="logout" size={24} color="#fff" />
          <Text style={[styles.buttonText, styles.logoutButtonText]}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#888',
  },
  menuContainer: {
    marginTop: 16,
    backgroundColor: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 18,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 8,
    margin: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  logoutButton: {
    backgroundColor: '#f44336',
  },
  logoutButtonText: {
    color: '#fff',
  },
});

export default ProfileScreen;