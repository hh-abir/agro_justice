
import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Login as Farmer"
        onPress={() => {
          // Handle farmer login
        }}
      />
      <Button
        title="Login as Customer"
        onPress={() => {
          // Handle customer login
        }}
      />
    </View>
  );
};

export default LoginScreen;
