// app/restaurant/[id]/reserve.tsx
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { otherRestaurants, Restaurant, topRestaurants } from '../../../constants/data/restaurants';

export default function ReservationScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const allRestaurants: Restaurant[] = [...topRestaurants, ...otherRestaurants];
  const restaurant = allRestaurants.find(r => r.id === id);
  if (!restaurant) return <View style={styles.center}><Text>Restaurant introuvable.</Text></View>;

  const [name, setName] = useState('');
  const [type, setType] = useState<'Grand Public' | 'VIP'>('Grand Public');
  const [unitPrice, setUnitPrice] = useState('0');
  const [quantity, setQuantity] = useState('1');
  const totalPrice = Number(unitPrice) * Number(quantity);

  return (
    <View style={styles.container}>
      {/* Image de fond */}
      <ImageBackground source={restaurant.image} style={styles.bgImage}>
        {/* Bouton retour */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>

      {/* Formulaire flottant */}
      <ScrollView style={styles.formContainer} contentContainerStyle={{ paddingBottom: 20 }}>
        <Text style={styles.restaurantName}>{restaurant.title}</Text>

        <Text style={styles.label}>Nom pour la réservation</Text>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Votre nom"
          onChangeText={setName}
        />

        <Text style={styles.label}>Type de place</Text>
        <View style={styles.buttonRow}>
          {['Grand Public', 'VIP'].map(option => (
            <TouchableOpacity
              key={option}
              style={[styles.typeButton, type === option && styles.typeButtonSelected, type === option && styles.typeButtonSelected, ]}
              onPress={() => setType(option as any)}
            >
              <Text style={styles.typeText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Prix unitaire</Text>
        <TextInput
          style={styles.input}
          value={unitPrice}
          placeholder="0"
          keyboardType="numeric"
          onChangeText={setUnitPrice}
        />

        <Text style={styles.label}>Quantité</Text>
        <TextInput
          style={styles.input}
          value={quantity}
          placeholder="1"
          keyboardType="numeric"
          onChangeText={setQuantity}
        />

        <Text style={styles.totalText}>Prix total : {isNaN(totalPrice) ? '0' : totalPrice} €</Text>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.push(`/restaurants/${id}/payment`)}
        >
          <Text style={styles.continueButtonText}>Continuer</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const { width, height } = Dimensions.get('window');
const BG_HEIGHT = height * 0.35;

const styles = StyleSheet.create({
  container: { flex: 1 },
  bgImage: {
    width,
    height: BG_HEIGHT,
  },
  backButton: {
    marginTop: 50,
    marginLeft: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
    padding: 8,
    alignSelf: 'flex-start',
  },
  formContainer: {
    position: 'absolute',
    top: BG_HEIGHT - 40,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    maxHeight: height - (BG_HEIGHT - 40),
  },
  restaurantName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 6,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  typeButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 20,
    marginRight: 8,
    alignItems: 'center',
  },
  typeButtonSelected: {
    backgroundColor: '#007bff',
   
  },
  typeText: {
    color: 'blue',
    fontWeight: '500',
  },
  typeTextSelected: {
    color: 'white', // texte blanc sur fond bleu
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
  },
  continueButton: {
    backgroundColor: '#00aaff',
    padding: 16,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
