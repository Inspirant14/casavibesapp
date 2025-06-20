// app/profile.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  // Remplace ces valeurs par les vraies données utilisateur
  const user = {
    avatar: require('../../assets/images/tof.jpg'), // image ronde
    name: 'John Doe',
    phone: '+212 600-123456',
    email: 'johndoe@example.com',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>

      <Image source={user.avatar} style={styles.avatar} />

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.info}>{user.phone}</Text>
      <Text style={styles.info}>{user.email}</Text>

      <TouchableOpacity style={styles.homeButton} onPress={() => router.push('/(tabs)')}>
        <Text style={styles.homeButtonText}>Accueil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // cercle
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#666',
    marginBottom: 6,
  },
  homeButton: {
    marginTop: 40,
    backgroundColor: '#00aaff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
