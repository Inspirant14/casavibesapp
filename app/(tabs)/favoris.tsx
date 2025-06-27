import { Categorie } from '@/components/Categorie';
import { SearchBar } from '@/components/SearchBar';
import { topRestaurants } from '@/constants/data/restaurants';
import { useFavorites } from '@/hooks/useFavorites';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FavoritesScreen() {
  const { favorites, removeFavorite } = useFavorites();
  const [selectedCategory, setSelectedCategory] = useState<string>('Tout');
  const [searchText, setSearchText] = useState<string>('');

  const favoriteItems = topRestaurants.filter(r =>
    favorites.includes(r.id) &&
    (selectedCategory === 'Tout' || r.type === selectedCategory) &&
    r.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Barre de recherche adaptée */}
      <SearchBar value={searchText} onSearch={setSearchText} />

      {/* Filtre de catégories */}
      <Categorie onFilter={setSelectedCategory} />

      <Text style={styles.heading}>Mes Favoris</Text>

      {favoriteItems.length === 0 ? (
        <Text style={styles.noFavorites}>Aucun élément trouvé.</Text>
      ) : (
        <FlatList
          data={favoriteItems}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.textBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
              <TouchableOpacity
                onPress={() => removeFavorite(item.id)}
                style={styles.favoriteButton}
              >
                <Ionicons name="heart" size={24} color="red" />
              </TouchableOpacity>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  noFavorites: { textAlign: 'center', fontSize: 16, color: '#666' },
  card: {
    flexDirection: 'row',
    marginBottom: 12,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 10,
    alignItems: 'center',
  },
  image: { width: 80, height: 80, borderRadius: 8 },
  textBox: { flex: 1, marginLeft: 10 },
  title: { fontSize: 16, fontWeight: 'bold' },
  location: { fontSize: 14, color: '#555' },
  favoriteButton: { padding: 8 },
});
