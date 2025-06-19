import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { topRestaurants } from '../constants/data/restaurants';

export const RestaurantPreview: React.FC = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState<string[]>([]); // IDs favoris

  const previewRestaurants = topRestaurants.slice(0, 3);

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Restaurants populaires</Text>

      {previewRestaurants.map(item => {
        const isFav = favorites.includes(item.id);
        return (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />

            <View style={styles.textBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Ionicons name="location-outline" size={16} color="#666" style={{ marginRight: 4 }} />
              <Text style={styles.location}>{item.location}</Text>
            </View>

            <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteButton}>
              <Ionicons name={isFav ? 'heart' : 'heart-outline'} size={24} color={isFav ? 'red' : '#666'} />
            </TouchableOpacity>
          </View>
        );
      })}

      <TouchableOpacity onPress={() => router.push('/AllRestaurants')}>
        <Text style={styles.seeMore}>Voir plus</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 0, margin: 0 },
  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  card: {
    flexDirection: 'row',
    marginBottom: 10,
    height: 100,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10,
  },
  image: { width: 80, height: 80, borderRadius: 8 },
  textBox: { flex: 1, marginLeft: 10 },
  title: { fontSize: 16, fontWeight: 'bold' },
  location: { fontSize: 14, color: '#555' },
  favoriteButton: {
    padding: 8,
  },
  seeMore: { color: '#007bff', marginTop: 8, textAlign: 'right' },
});
