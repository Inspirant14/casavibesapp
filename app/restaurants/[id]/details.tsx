import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions, ImageBackground, ScrollView,
  Text, TouchableOpacity, View
} from 'react-native';
import { topRestaurants, otherRestaurants, Restaurant } from '../../../constants/data/restaurants';
import { Carte } from '../../../components/Carte';
import { styles } from '../../../constants/detailsColor';
import { useFavorites } from '../../../hooks/useFavorites';

export default function RestaurantDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const all: Restaurant[] = [...topRestaurants, ...otherRestaurants];
  const restaurant = all.find(r => r.id === id);

  if (!restaurant) return <View style={styles.center}><Text>Introuvable</Text></View>;

  const isFav = favorites.includes(id);

  const { height } = Dimensions.get('window');
  const IMAGE_HEIGHT = height * 0.4;

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground source={restaurant.image} style={{ margin:10, width:390, height: IMAGE_HEIGHT, borderRadius:20, overflow:'hidden' }}>
          <View style={styles.overlay} />

          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
              <Ionicons name="arrow-back" size={28} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Détails</Text>
            <TouchableOpacity
              onPress={() =>
                isFav ? removeFavorite(id) : addFavorite(id)
              }
              style={styles.iconButton}
            >
              <Ionicons name={isFav ? 'heart' : 'heart-outline'} size={28} color="red" />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.content}>
          <Text style={styles.title}>{restaurant.title}</Text>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={20} color="#666" style={{ marginRight: 6 }} />
            <Text style={styles.locationText}>{restaurant.location}</Text>
          </View>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{restaurant.description}</Text>
        </View>

        <Text style={styles.title}>Localisation</Text>
        <Carte
  points={[
    {
      id: restaurant.id,
      latitude: restaurant.latitude,
      longitude: restaurant.longitude,
      title: restaurant.title,
      description: restaurant.description,
    },
  ]}
/>
      </ScrollView>

      <TouchableOpacity
        style={styles.reserveButton}
        onPress={() => router.push(`/restaurants/${id}/reserve`)}
      >
        <Text style={styles.reserveButtonText}>Réservation</Text>
      </TouchableOpacity>
    </View>
  );
}
