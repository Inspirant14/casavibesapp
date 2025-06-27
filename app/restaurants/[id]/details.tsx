// app/restaurant/[id].tsx
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { topRestaurants, otherRestaurants, Restaurant } from '@/constants/data/restaurants';
import { Carte } from '@/components/Carte';
import { styles } from '@/constants/detailsColor';


export default function RestaurantDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const allRestaurants: Restaurant[] = [...topRestaurants, ...otherRestaurants];
  const restaurant = allRestaurants.find(r => r.id === id);

  if (!restaurant) {
    return (
      <View style={styles.center}>
        <Text>Restaurant introuvable.</Text>
      </View>
    );
  }

  const { height } = Dimensions.get('window');
  const IMAGE_HEIGHT = height * 0.4;

  return (
    <View style={styles.container}>
      <ScrollView>
      
      <ImageBackground source={restaurant.image} style={{margin:10 ,width:390, overflow:'hidden', borderRadius:20, height: IMAGE_HEIGHT, }}>
        <View style={styles.overlay} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Détails</Text>
          <TouchableOpacity onPress={() => alert('Enregistré !')} style={styles.iconButton}>
            <Ionicons name="heart" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>{restaurant.title}</Text>
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={20} color="#666" style={{ marginRight: 6 }} />
          <Text style={styles.locationText}>{restaurant.location}</Text>
        </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{restaurant.description}</Text>
      </ScrollView>
      <Text style={styles.title}> Localisation </Text>
      <Carte/>

      </ScrollView>

      <TouchableOpacity style={styles.reserveButton}
          onPress={() => router.push(`/restaurants/${id}/reserve`)}>
        <Text style={styles.reserveButtonText}>Réservation</Text>
      </TouchableOpacity>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: { flex: 1,  },
//   center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0,0,0,0.3)',
    
//   },
//   header: {
//     position: 'absolute',
//     top: 40,
//     left: 16,
//     right: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   iconButton: {
//     padding: 8,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//     borderRadius: 20,
//   },
//   headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
//   content: { flex: 1, padding: 16 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
//   locationRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   locationText: { color: '#666', fontSize: 16 },
//   sectionTitle: { fontSize: 20, fontWeight: '600', marginBottom: 6 },
//   description: { fontSize: 16, color: '#444', lineHeight: 22 },
  
//   reserveButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
//    reserveButton: {
//   position: 'absolute', // fixe en bas
//   bottom: 20,
//   left: 20,
//   right: 20,
//   backgroundColor: '#00aaff',
//   padding: 16,
//   borderRadius: 40,
//   alignItems: 'center',
//   elevation: 5,
//   shadowColor: '#000',
//   shadowOffset: { width: 0, height: 2 },
//   shadowOpacity: 0.3,
//   shadowRadius: 4,
// },

// });
