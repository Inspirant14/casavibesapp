// screens/AllRestaurants.tsx
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { HorizontalRestaurantSlider } from '@/components/HorizontalRestaurantSlider';
// import { otherRestaurants } from '../constants/data/restaurants';
// import { Ionicons } from '@expo/vector-icons';
import { RestaurantList } from '../components/RestaurantList';
import { SearchBar } from '@/components/searchBar';



export default function AllRestaurants() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Que voulez faie aujourd hui?</Text>
      <SearchBar/>
      <Text style={styles.title}>A la une</Text>

      <HorizontalRestaurantSlider/>
      
      <Text style={styles.title}>RESTAURANTS</Text>
      <RestaurantList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    flexDirection: 'row',
    marginBottom: 12,
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: { width: 80, height: 80, borderRadius: 8, },
  textBox: { marginLeft: 10, justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: 'bold' },
  location: { fontSize: 14 },
});
