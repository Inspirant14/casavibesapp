// screens/AllRestaurants.tsx
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { HorizontalRestaurantSlider } from '@/components/HorizontalRestaurantSlider';

const topRestaurants = [ {
    id: '1',
    title: 'Le Gourmet',
    location: 'Centre-ville, Casablanca',
    rating: 4.8,
    image: require('../assets/images/tof.jpg'),
  },
  {
    id: '2',
    title: 'Casa Délices',
    location: 'Maarif, Casablanca',
    rating: 4.6,
    image: require('../assets/images/tof.jpg'),
  },
  {
    id: '3',
    title: 'Le Patio',
    location: 'Anfa, Casablanca',
    rating: 4.9,
    image: require('../assets/images/tof.jpg'),
  },
 ];

export default function AllRestaurants() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A la une</Text>

      <HorizontalRestaurantSlider/>
      <Text style={styles.title}>RESTAURANTS</Text>
      <FlatList
        data={topRestaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>
        )}
      />
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
  image: { width: 80, height: 80 },
  textBox: { marginLeft: 10, justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: 'bold' },
  location: { fontSize: 14 },
});
