// screens/FavoritesScreen.tsx
import React, { useState } from 'react';
import { useRouter, useFocusEffect } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from '../../components/SearchBar';
import { Categorie } from '../../components/Categorie';
import { useFavorites } from '../../hooks/useFavorites';
import {
  topRestaurants, otherRestaurants,
  topConcerts, otherConcerts,
  topActivites, otherActivites
} from '../../constants/data/restaurants'; // ou chemin adapté

export default function FavoritesScreen() {
  const router = useRouter();
  const { favorites, removeFavorite, loadFavorites } = useFavorites();

  const [selectedCategory, setSelectedCategory] = useState<string>('Tout');
  const [searchText, setSearchText] = useState<string>('');

  const allItems = [
    ...topRestaurants, ...otherRestaurants,
    ...topConcerts, ...otherConcerts,
    ...topActivites, ...otherActivites
  ];

  const favoriteItems = allItems.filter(item =>
    favorites.includes(item.id) &&
    (selectedCategory === 'Tout' || item.type === selectedCategory) &&
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handlePressItem = (item: any) => {
    const base = item.type === 'Restaurant'
      ? 'restaurants'
      : item.type === 'Concert'
        ? 'concerts'
        : 'activites';
    router.push(`/${base}/${item.id}/details`);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={setSearchText} />
      <Categorie onFilter={setSelectedCategory} />
      <Text style={styles.heading}>Mes Favoris</Text>

      {favoriteItems.length === 0 ? (
        <Text style={styles.noFavorites}>Aucun élément trouvé.</Text>
      ) : (
        <FlatList
          data={favoriteItems}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handlePressItem(item)}
              style={styles.card}
            >
              <Image source={item.image} style={styles.image} />
              <View style={styles.textBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.meta}>
                  {item.location} • {item.type}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => removeFavorite(item.id)}
                style={styles.favoriteButton}
              >
                <Ionicons name="heart" size={24} color="red" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  heading: { fontSize: 22, fontWeight: 'bold', marginVertical: 12 },
  noFavorites: { textAlign: 'center', fontSize: 16, color: '#666', marginTop: 20 },
  card: {
    flexDirection: 'row',
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10,
  },
  image: { width: 80, height: 80, borderRadius: 8 },
  textBox: { flex: 1, marginLeft: 12 },
  title: { fontSize: 16, fontWeight: 'bold' },
  meta: { fontSize: 14, color: '#555', marginTop: 4 },
  favoriteButton: { padding: 8 },
});
