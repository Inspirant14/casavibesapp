// components/HorizontalRestaurantSlider.tsx
import React, { useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { ConcertCard } from './ConcertCard';
import { Concert } from '../constants/data/restaurants';

// interface Concert {
//   id: string;
//   title: string;
//   location: string;
//   rating: number;
//   image: any;
//   description?: string;
//   type?: string;
//   dateDebut?: string;
//   dateFin?: string;
//   heureDebut?: string;
//   heureFin?: string;
// }

interface Props {
  data: Concert[];
  autoScroll?: boolean;
  scrollInterval?: number;
}

export const HorizontalConcertSlider: React.FC<Props> = ({
  data,
  autoScroll = true,
  scrollInterval = 5000,
}) => {
  const flatListRef = useRef<FlatList<Concert>>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
  if (!autoScroll || data.length === 0) return;

  let currentIndex = 0;

  const interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % data.length;
    flatListRef.current?.scrollToIndex({ index: currentIndex, animated: true });
  }, scrollInterval);

  return () => clearInterval(interval);
}, [autoScroll, scrollInterval, data.length]);


  return (
    <FlatList
      ref={flatListRef}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <ConcertCard item={item} />}
    />
  );
};
