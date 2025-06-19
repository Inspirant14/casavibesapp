// components/HorizontalRestaurantSlider.tsx
import React, { useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { RestaurantCard } from './RestaurantCard';
import { topRestaurants } from '../constants/data/restaurants';



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
