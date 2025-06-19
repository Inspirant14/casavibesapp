import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function RestaurantCard({ item }: { item: any }) {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: '/restaurants/[id]',
      params: { id: item.id }, // ← Passer l’ID du restaurant
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      {/* Image avec étoile */}
      <View>
        <Image source={item.image} style={styles.image} />
        <View style={styles.ratingBox}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>

      {/* Enregistrer */}
      <TouchableOpacity style={styles.saveIcon} onPress={() => alert('Enregistré !')}>
        <Ionicons name="bookmark" size={24} color="red" />
      </TouchableOpacity>

      {/* Infos */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.title}</Text>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={16} color="#666" style={{ marginRight: 4 }} />
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginRight: 15,
    width: 250,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    overflow: 'hidden',
  },
  image: {
    width: 230,
    height: 130,
    borderRadius: 20,
    margin:10,
  },
  ratingBox: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontWeight: 'bold',
  },
  saveIcon: {
    position: 'absolute',
    top: 110,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  location: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
  },
 locationContainer: {
  flexDirection: 'row',
  alignItems: 'center',
},

});
