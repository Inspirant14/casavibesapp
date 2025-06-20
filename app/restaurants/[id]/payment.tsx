import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { paymentLogos } from '../../../assets/images/paymentLogos';
import { otherRestaurants, Restaurant, topRestaurants } from '../../../constants/data/restaurants';

export default function PaymentScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const all: Restaurant[] = [...topRestaurants, ...otherRestaurants];
  const restaurant = all.find(r => r.id === id);
  if (!restaurant) return <View style={styles.center}><Text>Not found.</Text></View>;

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');

  const totalAmount = '123 €'; // Tu peux calculer depuis le state

  const BG_HEIGHT = Dimensions.get('window').height * 0.3;

  return (
    <View style={styles.container}>
      {/* Fond en haut */}
      <ImageBackground source={restaurant.image} style={[styles.bgImage, { height: BG_HEIGHT }]}>
        {/* Bouton retour */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>

      {/* Formulaire flottant */}
      <ScrollView style={[styles.formContainer, { top: BG_HEIGHT - 30 }]} contentContainerStyle={{ paddingBottom: 40 }}>
        <Text style={styles.heading}>Paiement</Text>
        <View style={styles.amountRow}>
          <Text style={styles.label}>Prix total</Text>
          <Text style={styles.amount}>{totalAmount}</Text>
        </View>

        <Text style={styles.sectionTitle}>Méthode de paiement</Text>
        <View style={styles.methodsRow}>
  {Object.entries(paymentLogos).map(([key, logo]) => (
    <Image
      key={key}
      source={logo}
      style={styles.methodIcon}
      resizeMode="contain"
    />
  ))}
</View>

        <TextInput
          style={styles.input}
          placeholder="Nom du titulaire"
          value={cardName}
          onChangeText={setCardName}
        />
        <TextInput
          style={styles.input}
          placeholder="Numéro de la carte"
          value={cardNumber}
          keyboardType="numeric"
          onChangeText={setCardNumber}
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="MM/AA"
            value={expDate}
            onChangeText={setExpDate}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="CVV"
            value={cvv}
            keyboardType="numeric"
            onChangeText={setCvv}
          />
        </View>

        <TouchableOpacity style={styles.payButton} onPress={() => alert('Paiement en cours')}>
          <Text style={styles.payButtonText}>Payer</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1 },
  bgImage: { width, position: 'absolute' },
  backButton: {
    marginTop: 50,
    marginLeft: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 8,
    borderRadius: 20,
  },
  formContainer: {
    position: 'absolute',
    marginHorizontal: 20,
    width: width - 40,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  label: { fontSize: 16, color: '#666' },
  amount: { fontSize: 18, fontWeight: 'bold', color: '#007bff' },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 10 },
  methodsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  methodIcon: {
    width: (width - 80) / 4,
    height: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: (width - 60) / 2,
  },
  payButton: {
    backgroundColor: '#00aaff',
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
