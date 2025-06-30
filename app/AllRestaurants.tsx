import { HorizontalRestaurantSlider } from '../components/HorizontalRestaurantSlider';
import { SearchBar } from '../components/SearchBar';
import { topRestaurants } from '../constants/data/restaurants';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RestaurantList } from '../components/RestaurantList';

export default function AllRestaurants() {
  const [searchTerm, setSearchTerm] = useState('');

  // Fonction de filtrage
  const matchesSearch = (restaurant: { title: string; location: string }) =>
    restaurant.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant.location.toLowerCase().includes(searchTerm.toLowerCase());

  const filteredRestaurants = topRestaurants.filter(matchesSearch);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Que voulez-vous faire aujourd’hui ?</Text>

      <SearchBar onSearch={setSearchTerm} />

      <Text style={styles.title}>À la une</Text>
      <HorizontalRestaurantSlider data={filteredRestaurants} />

      <Text style={styles.title}>RESTAURANTS</Text>
      <RestaurantList data={filteredRestaurants} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, borderRadius: 10 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
});
