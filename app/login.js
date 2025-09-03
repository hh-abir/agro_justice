
import { useRouter } from 'expo-router';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image
        source={{ uri: 'https://source.unsplash.com/random/200x200/?logo,farming' }}
        style={styles.logo}
      />
      <Text style={styles.title}>AgroJustice</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/(farmer)/dashboard')}
      >
        <Text style={styles.buttonText}>Login as Farmer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/(customer)')} 
      >
        <Text style={styles.buttonText}>Login as Customer</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#333',
  },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 16,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
