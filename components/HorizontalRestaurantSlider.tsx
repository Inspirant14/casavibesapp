// components/HorizontalRestaurantSlider.tsx
import React, { useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { RestaurantCard } from './RestaurantCard';

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

export const HorizontalRestaurantSlider: React.FC = () => {
  const flatListRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % topRestaurants.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <FlatList
      ref={flatListRef}
      data={topRestaurants}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <RestaurantCard item={item} />}
    />
  );
};
