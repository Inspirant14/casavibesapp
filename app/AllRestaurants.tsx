// screens/AllRestaurants.tsx
import { HorizontalRestaurantSlider } from '@/components/HorizontalRestaurantSlider';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { otherRestaurants } from '../constants/data/restaurants';
// import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from '@/components/SearchBar';
import { RestaurantList } from '../components/RestaurantList';



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
