
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Navigate to Profile Info
        }}
      >
        <MaterialIcons name="person-outline" size={24} color="#333" />
        <Text style={styles.buttonText}>Profile Info</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Navigate to Settings
        }}
      >
        <MaterialIcons name="settings" size={24} color="#333" />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Navigate to Payments
        }}
      >
        <MaterialIcons name="payment" size={24} color="#333" />
        <Text style={styles.buttonText}>Payments</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Navigate to Support Center
        }}
      >
        <MaterialIcons name="support-agent" size={24} color="#333" />
        <Text style={styles.buttonText}>Support Center</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={() => router.replace('/login')}
      >
        <MaterialIcons name="logout" size={24} color="#fff" />
        <Text style={[styles.buttonText, styles.logoutButtonText]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 48,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 16,
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  logoutButton: {
    backgroundColor: '#f44336',
  },
  logoutButtonText: {
    color: '#fff',
  },
});

export default ProfileScreen;
