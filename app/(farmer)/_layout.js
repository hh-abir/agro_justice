
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function FarmerLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4CAF50', // Green color for farmer
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: 'AI Assistant',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="assistant" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="chat" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
