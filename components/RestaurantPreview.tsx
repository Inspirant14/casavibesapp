// components/RestaurantPreview.tsx
import { styles } from '../constants/previewColor';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Restaurant } from '../constants/data/restaurants';
import { useFavorites } from '../hooks/useFavorites';

interface Props {
  restaurants: Restaurant[];
}

export const RestaurantPreview: React.FC<Props> = ({ restaurants }) => {
  const router = useRouter();
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  // const preview = restaurants.slice(0, 3);

  const toggleFavorite = (id: string) => {
    favorites.includes(id) ? removeFavorite(id) : addFavorite(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Restaurants</Text>

      {restaurants.map(item => {
        const isFav = favorites.includes(item.id);
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => router.push(`../../restaurants/${item.id}/details`)}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.textBox}>
              <Text style={styles.title}>{item.title}</Text>
           
              <Text style={styles.location}><Ionicons name="location" size={16} color="#666" style={{ marginRight: 4 }} /> {item.location}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteButton}>
              <Ionicons name={isFav ? 'heart' : 'heart-outline'} size={24} color={isFav ? 'red' : '#666'} />
            </TouchableOpacity>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity onPress={() => router.push('/AllRestaurants')} style={styles.seeMore}>
        <Text style={styles.seeMoreText}>Voir plus</Text>
      </TouchableOpacity>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: { padding: 0, margin: 10 },
//   heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
//   card: {
//     flexDirection: 'row',
//     marginBottom: 10,
//     height: 100,
//     backgroundColor: '#f1f1f1',
//     borderRadius: 10,
//     overflow: 'hidden',
//     alignItems: 'center',
//     padding: 10,
//   },
//   image: { width: 80, height: 80, borderRadius: 8 },
//   textBox: { flex: 1, marginLeft: 10 },
//   title: { fontSize: 16, fontWeight: 'bold' },
//   location: { fontSize: 14, color: '#555' },
//   favoriteButton: { padding: 8 },
//   seeMore: { marginTop: 8, alignSelf: 'flex-end' },
//   seeMoreText: {
//     backgroundColor: '#00aaff',
//     color: '#fff',
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//   },
// });
