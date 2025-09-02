
import React from 'react';
import { View, Text, Button } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Landing Screen</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default LandingScreen;
