import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RestaurantCard } from '../../components/RestaurantCard';
import { styles } from '../../constants/HomeStyles';



const categories = [
  { id: '1', title: 'Restaurant' },
  { id: '2', title: 'Concert' },
  { id: '3', title: 'Activités' },
];


const topRestaurants = [
  {
    id: '1',
    title: 'Le Gourmet',
    location: 'Centre-ville, Casablanca',
    rating: 4.8,
    image: require('../../assets/images/tof.jpg'),
  },
  {
    id: '2',
    title: 'Casa Délices',
    location: 'Maarif, Casablanca',
    rating: 4.6,
    image: require('../../assets/images/tof.jpg'),
  },
  {
    id: '3',
    title: 'Le Patio',
    location: 'Anfa, Casablanca',
    rating: 4.9,
    image: require('../../assets/images/tof.jpg'),
  },
];


export default function HomeScreen() {
  const flatListRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);

  // scroll automatique
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % topRestaurants.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <View style={styles.container}>
      {/* Logo */}
      {/* <Image source={require('../../assets/images/logo.jpg')} style={styles.logo} /> */}

      {/* Texte d'accueil */}
      <Text style={styles.title}>Que voulez-vous faire today ?</Text>

      {/* Barre de recherche */}
      <TextInput placeholder="Rechercher..." style={styles.searchBar} />

      {/* Catégories */}
      <View style={styles.categories}>
        {categories.map(cat => (
          <TouchableOpacity key={cat.id} style={styles.categoryBox}>
            <Text style={styles.categoryText}>{cat.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      

       
<FlatList
  ref={flatListRef}
  data={topRestaurants}
  keyExtractor={(item) => item.id}
  horizontal
  showsHorizontalScrollIndicator={false}
  renderItem={({ item }) => <RestaurantCard item={item} />}
/>



      {/* Image fixe */}
      <Image source={require('../../assets/images/tof.jpg')} style={styles.staticImage} />
    </View>
  );
}
