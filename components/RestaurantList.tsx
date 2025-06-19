// components/RestaurantList.tsx
import React, { useState } from 'react';
import { FlatList, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { otherRestaurants } from '../constants/data/restaurants';

export const RestaurantList: React.FC = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState<string[]>([]);

  const handlePress = (id: string) => {
    router.push(`/restaurants/${id}`);
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  return (
    <FlatList
      data={otherRestaurants}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const isFav = favorites.includes(item.id);
        return (
          <TouchableOpacity
            onPress={() => handlePress(item.id)}
            style={styles.card}
          >
            <Image source={item.image} style={styles.image} />

            <View style={styles.textBox}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.locationRow}>
                <Ionicons name="location-outline" size={16} color="#666" />
                <Text style={styles.location}>{item.location}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.favoriteIcon}
              onPress={() => toggleFavorite(item.id)}
            >
              <Ionicons
                name={isFav ? 'heart' : 'heart-outline'}
                size={24}
                color={isFav ? 'red' : '#666'}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        );
      }}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textBox: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    marginLeft: 4,
    color: '#666',
    fontSize: 14,
  },
  favoriteIcon: {
    padding: 8,
  },
});
