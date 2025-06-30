// screens/AllRestaurants.tsx
import { HorizontalConcertSlider } from '../components/HorizontalConcertSlider';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { otherRestaurants } from '../constants/data/restaurants';
// import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from '../components/SearchBar';
import { ConcertList } from '../components/ConcertList';
import { topConcerts } from '../constants/data/restaurants';
// import { allRestaurants } from '@/constants/data/restaurants';




// const filteredRestaurantsConcertsActivites = selectedCategory === 'Tout'
//     ? allRestaurantsConcertsActivites : [];
//   const filteredNoRestaurants = selectedCategory === 'Tout'
//     ? allRestaurants : [];
//   const filteredNoConcerts = selectedCategory === 'Tout'
//     ? allConcerts : [];
//   const filteredNoActivites = selectedCategory === 'Tout'
//     ? allActivites : [];



export default function AllRestaurants() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Que voulez faie aujourd hui?</Text>
      <SearchBar/>
      
      <Text style={styles.title}>A la une</Text>

      <HorizontalConcertSlider data={topConcerts} />
      
      <Text style={styles.title}>RESTAURANTS</Text>
      <ConcertList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, borderRadius:10, },
  card: {
    flexDirection: 'row',
    marginBottom: 0,
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: { width: 80, height: 80, borderRadius: 8, },
  textBox: { marginLeft: 10, justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: 'bold' },
  location: { fontSize: 14 },
});
