import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error('Erreur lors du chargement des favoris:', error);
      }
    };

    loadFavorites();
  }, []);

  const addFavorite = async (id: string) => {
    try {
      const updatedFavorites = [...favorites, id];
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error('Erreur lors de l\'ajout aux favoris:', error);
    }
  };

  const removeFavorite = async (id: string) => {
    try {
      const updatedFavorites = favorites.filter(fav => fav !== id);
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error('Erreur lors du retrait des favoris:', error);
    }
  };

  return { favorites, addFavorite, removeFavorite };
};
