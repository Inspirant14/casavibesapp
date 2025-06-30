// hooks/useFavorites.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState} from 'react';
import { useFocusEffect } from 'expo-router';
import React from 'react';

const STORAGE_KEY = 'FAV_IDS';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const loadFavorites = async () => {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    setFavorites(json ? JSON.parse(json) : []);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  const save = (newFav: string[]) => {
    setFavorites(newFav);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newFav));
  };

  const addFavorite = (id: string) => {
    if (!favorites.includes(id)) save([...favorites, id]);
  };

  const removeFavorite = (id: string) => {
    save(favorites.filter(f => f !== id));
  };

  return { favorites, addFavorite, removeFavorite, loadFavorites };
}
