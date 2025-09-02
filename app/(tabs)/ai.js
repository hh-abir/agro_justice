
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

const AnimatedMessage = ({ children, sender }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};

const ThinkingIndicator = () => {
    const dot1 = useRef(new Animated.Value(0)).current;
    const dot2 = useRef(new Animated.Value(0)).current;
    const dot3 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animate = (dot, delay) => {
            return Animated.loop(
                Animated.sequence([
                    Animated.timing(dot, { toValue: 1, duration: 300, delay, useNativeDriver: true }),
                    Animated.timing(dot, { toValue: 0, duration: 300, useNativeDriver: true }),
                ])
            );
        };
        animate(dot1, 0).start();
        animate(dot2, 150).start();
        animate(dot3, 300).start();
    }, [dot1, dot2, dot3]);

    const dotStyle = (dot) => ({
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#999',
        marginHorizontal: 4,
        transform: [{ translateY: dot.interpolate({ inputRange: [0, 1], outputRange: [0, -5] }) }]
    });

    return (
        <View style={styles.thinkingContainer}>
            <Animated.View style={dotStyle(dot1)} />
            <Animated.View style={dotStyle(dot2)} />
            <Animated.View style={dotStyle(dot3)} />
        </View>
    );
};


const AiScreen = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! How can I assist you today?', sender: 'ai' },
  ]);
  const [inputText, setInputText] = useState('');
  const [isAiThinking, setIsAiThinking] = useState(false);
  const pulseAnim = useRef(new Animated.Value(1)).current;


  useEffect(() => {
    Animated.loop(
        Animated.sequence([
            Animated.timing(pulseAnim, { toValue: 1.1, duration: 500, useNativeDriver: true }),
            Animated.timing(pulseAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
        ])
    ).start();
  }, [pulseAnim]);


  const handleSendMessage = () => {
    if (inputText.trim().length > 0) {
      setMessages([...messages, { id: Date.now().toString(), text: inputText, sender: 'user' }]);
      setInputText('');
      setIsAiThinking(true);
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { id: Date.now().toString(), text: 'This is a simulated AI response to your message.', sender: 'ai' }]);
        setIsAiThinking(false);
      }, 2000);
    }
  };

  const renderMessage = ({ item }) => (
    <AnimatedMessage sender={item.sender}>
        <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessageContainer : styles.aiMessageContainer]}>
            <Text style={item.sender === 'user' ? styles.userMessageText : styles.aiMessageText}>{item.text}</Text>
        </View>
    </AnimatedMessage>
  );

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <MaterialIcons name="assistant" size={28} color="#2196F3" />
            <Text style={styles.headerTitle}>AI Assistant</Text>
        </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
        keyboardVerticalOffset={110}
      >
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.messageList}
        />
        {isAiThinking && <ThinkingIndicator />}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Ask me anything..."
            placeholderTextColor="#999"
          />
          <TouchableOpacity onPress={handleSendMessage}>
            <Animated.View style={[styles.micButton, {transform: [{scale: pulseAnim}]}]}>
                <MaterialIcons name="mic" size={28} color="#fff" />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#fff',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    messageList: {
        padding: 16,
    },
    messageContainer: {
        padding: 16,
        borderRadius: 20,
        marginBottom: 12,
        maxWidth: '85%',
    },
    userMessageContainer: {
        backgroundColor: '#2196F3',
        alignSelf: 'flex-end',
        borderBottomRightRadius: 4,
    },
    aiMessageContainer: {
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        borderBottomLeftRadius: 4,
    },
    userMessageText: {
        fontSize: 16,
        color: '#fff',
    },
    aiMessageText: {
        fontSize: 16,
        color: '#333',
    },
    thinkingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 24,
        marginBottom: 12,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
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
    micButton: {
        backgroundColor: '#2196F3',
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AiScreen;
