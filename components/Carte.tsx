import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

// 👇 ajouter le type pour les points
type Point = {
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  description?: string;
};

// 👇 accepter la prop points
interface CarteProps {
  points?: Point[];
}

export const Carte: React.FC<CarteProps> = ({ points }) => {
  const [position, setPosition] = useState({
    latitude: 33.5731,
    longitude: -7.5898,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission de localisation refusée');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        region={
  points && points.length > 0
    ? {
        latitude: points[0].latitude,
        longitude: points[0].longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    : {
        ...position,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }
}

        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {/* marqueur position utilisateur */}
        <Marker
          coordinate={position}
          title="Votre position"
          description="Vous êtes ici"
        />

        {/* 👇 ajouter les points */}
        {points &&
          points.map((point) => (
            <Marker
              key={point.id}
              coordinate={{
                latitude: point.latitude,
                longitude: point.longitude,
              }}
              title={point.title}
              description={point.description}
            />
          ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: '95%',
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
    margin: 10,
  },
  map: {
    flex: 1,
  },
});
