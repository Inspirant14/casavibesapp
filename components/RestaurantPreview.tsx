// components/RestaurantPreview.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const topRestaurants = [
  {
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

export const RestaurantPreview: React.FC = () => {
  const router = useRouter();

  const previewRestaurants = topRestaurants.slice(0, 3); // max 3 éléments

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Restaurants populaires</Text>

      {previewRestaurants.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.textBox}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </View>
        </View>
      ))}

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
  },
  image: { width: 100, height: 100, margin: 10 },
  textBox: { marginLeft: 10, justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: 'bold' },
  location: { fontSize: 14, color: '#555' },
  seeMore: { color: '#007bff', marginTop: 8, textAlign: 'right' },
});
