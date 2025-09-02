import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useNavigation } from 'expo-router';

const ChatScreen = () => {
  const { id, name } = useLocalSearchParams();
  const navigation = useNavigation();
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!', sender: 'other', avatar: 'https://picsum.photos/200/200?random=15' },
    { id: '2', text: 'Hi there!', sender: 'user', avatar: 'https://picsum.photos/200/200?random=20' },
    { id: '3', text: 'How are you?', sender: 'other', avatar: 'https://picsum.photos/200/200?random=15' },
    { id: '4', text: 'I am good, thanks! And you?', sender: 'user', avatar: 'https://picsum.photos/200/200?random=20' },
  ]);
  const [inputText, setInputText] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' },
    });
    return () => navigation.getParent()?.setOptions({ tabBarStyle: { display: 'flex' } });
  }, [navigation, name]);

  const handleSendMessage = () => {
    if (inputText.trim().length > 0) {
      setMessages([...messages, { id: Date.now().toString(), text: inputText, sender: 'user', avatar: 'https://picsum.photos/200/200?random=20' }]);
      setInputText('');
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.messageRow, item.sender === 'user' ? styles.userMessageRow : styles.otherMessageRow]}>
        {item.sender === 'other' && <Image source={{ uri: item.avatar }} style={styles.avatar} />}
        <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessageContainer : styles.otherMessageContainer]}>
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
        {item.sender === 'user' && <Image source={{ uri: item.avatar }} style={styles.avatar} />}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
        keyboardVerticalOffset={90}
      >
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.messageList}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type a message..."
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    messageList: {
        padding: 16,
    },
    messageRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 12,
    },
    userMessageRow: {
        justifyContent: 'flex-end',
    },
    otherMessageRow: {
        justifyContent: 'flex-start',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 8,
    },
    messageContainer: {
        padding: 12,
        borderRadius: 18,
        maxWidth: '70%',
    },
    userMessageContainer: {
        backgroundColor: '#2196F3',
        borderBottomRightRadius: 4,
    },
    otherMessageContainer: {
        backgroundColor: '#f0f0f0',
        borderBottomLeftRadius: 4,
    },
    messageText: {
        fontSize: 16,
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    input: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 24,
        paddingVertical: 12,
        paddingHorizontal: 18,
        fontSize: 16,
        marginRight: 16,
    },
    sendButton: {
        backgroundColor: '#2196F3',
        borderRadius: 24,
        paddingVertical: 12,
        paddingHorizontal: 18,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ChatScreen;