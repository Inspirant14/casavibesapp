import { HorizontalActiviteSlider } from '@/components/HorizontalActiviteSlider';
import { SearchBar } from '@/components/SearchBar';
import { topActivites } from '@/constants/data/restaurants';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ActiviteList } from '../components/ActiviteList';

export default function AllActivites() {
  const [searchTerm, setSearchTerm] = useState('');

  // Fonction de filtrage
  const matchesSearch = (activite: { title: string; location: string }) =>
    activite.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activite.location.toLowerCase().includes(searchTerm.toLowerCase());

  const filteredActivites = topActivites.filter(matchesSearch);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Que voulez-vous faire aujourd’hui ?</Text>

      <SearchBar onSearch={setSearchTerm} />

      <Text style={styles.title}>À la une</Text>
      <HorizontalActiviteSlider data={filteredActivites} />

      <Text style={styles.title}>RESTAURANTS</Text>
      <ActiviteList data={filteredActivites} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, borderRadius: 10 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
});
