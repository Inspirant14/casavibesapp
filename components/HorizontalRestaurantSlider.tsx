// components/HorizontalRestaurantSlider.tsx
import React, { useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { RestaurantCard } from './RestaurantCard';
import { Restaurant } from '../constants/data/restaurants';

// interface Restaurant {
//   id: string;
//   title: string;
//   location: string;
//   rating: number;
//   image: any;
//   description?: string;
// }

interface Props {
  data: Restaurant[];
  autoScroll?: boolean;
  scrollInterval?: number;
}

export const HorizontalRestaurantSlider: React.FC<Props> = ({
  data,
  autoScroll = true,
  scrollInterval = 5000,
}) => {
  const flatListRef = useRef<FlatList<Restaurant>>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoScroll || data.length === 0) return;

    const interval = setInterval(() => {
      const nextIndex = (index + 1) % data.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setIndex(nextIndex);
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [index, autoScroll, scrollInterval, data.length]);

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <RestaurantCard item={item} />}
    />
  );
};
