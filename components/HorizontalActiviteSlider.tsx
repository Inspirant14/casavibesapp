// components/HorizontalRestaurantSlider.tsx
import { Activite } from '@/constants/data/restaurants';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { ActiviteCard } from './ActiviteCard';

// interface Activite {
//   id: string;
//   title: string;
//   location: string;
//   rating: number;
//   image: any;
//   description?: string;
// }

interface Props {
  data: Activite[];
  autoScroll?: boolean;
  scrollInterval?: number;
}

export const HorizontalActiviteSlider: React.FC<Props> = ({
  data,
  autoScroll = true,
  scrollInterval = 5000,
}) => {
  const flatListRef = useRef<FlatList<Activite>>(null);
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
      renderItem={({ item }) => <ActiviteCard item={item} />}
    />
  );
};
