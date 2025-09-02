import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const activeUsers = [
  { id: '1', name: 'John Doe', avatar: 'https://picsum.photos/200/200?random=21' },
  { id: '2', name: 'Jane Smith', avatar: 'https://picsum.photos/200/200?random=22' },
  { id: '3', name: 'Bob Johnson', avatar: 'https://picsum.photos/200/200?random=23' },
  { id: '4', name: 'Alice Williams', avatar: 'https://picsum.photos/200/200?random=24' },
  { id: '5', name: 'Chris Brown', avatar: 'https://picsum.photos/200/200?random=25' },
  { id: '6', name: 'Emily Jones', avatar: 'https://picsum.photos/200/200?random=26' },
];

const chats = [
  { id: '1', name: 'John Doe', lastMessage: 'See you tomorrow!', avatar: 'https://picsum.photos/200/200?random=15' },
  { id: '2', name: 'Jane Smith', lastMessage: 'Okay, sounds good.', avatar: 'https://picsum.photos/200/200?random=16' },
  { id: '3', name: 'Bob Johnson', lastMessage: 'Can you send me the file?', avatar: 'https://picsum.photos/200/200?random=17' },
  { id: '4', name: 'Alice Williams', lastMessage: 'I will be there in 5 minutes.', avatar: 'https://picsum.photos/200/200?random=18' },
  { id: '5', name: 'Chris Brown', lastMessage: 'Thanks for your help!', avatar: 'https://picsum.photos/200/200?random=19' },
  { id: '6', name: 'Emily Jones', lastMessage: 'Let\'s catch up later.', avatar: 'https://picsum.photos/200/200?random=20' },
  { id: '7', name: 'David Miller', lastMessage: 'Can you call me back?', avatar: 'https://picsum.photos/200/200?random=27' },
  { id: '8', name: 'Sarah Wilson', lastMessage: 'I have a question.', avatar: 'https://picsum.photos/200/200?random=28' },
];

const ActiveUserAvatar = ({ user }) => (
  <View style={styles.activeUserContainer}>
    <Image source={{ uri: user.avatar }} style={styles.activeUserAvatar} />
    <View style={styles.activeDot} />
  </View>
);

const ChatListScreen = () => {
  const router = useRouter();

  const renderChat = ({ item }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => router.push(`/(tabs)/chat/${item.id}`)}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatContent}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search messages..."
        />
      </View>
      <View style={styles.activeUsersSection}>
        <FlatList
          data={activeUsers}
          renderItem={({ item }) => <ActiveUserAvatar user={item} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 16 }}
        />
      </View>
      <FlatList
        data={chats}
        renderItem={renderChat}
        keyExtractor={item => item.id}
      />
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
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  activeUsersSection: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  activeUserContainer: {
    marginRight: 16,
    alignItems: 'center',
  },
  activeUserAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  activeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: '#fff',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  chatContent: {
    flex: 1,
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 14,
    color: '#888',
  },
});

export default ChatListScreen;