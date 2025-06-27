import React, { useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { EventItem } from '@/constants/data/restaurants';
import { MixedCard } from './MixedCard';

interface Props {
  data: EventItem[];
}

export function HorizontalMixedSlider({ data }: Props) {
  const flatListRef = useRef<FlatList<EventItem>>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (data.length === 0) return;

    const interval = setInterval(() => {
      const nextIndex = (index + 1) % data.length;
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      setIndex(nextIndex);
    }, 5000); // toutes les secondes

    return () => clearInterval(interval);
  }, [index, data]);

  return (
    <FlatList
      ref={flatListRef}
      horizontal
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <MixedCard item={item} />}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
    />
  );
}
