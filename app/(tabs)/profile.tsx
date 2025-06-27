import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  const [name, setName] = useState('John Doe');
  const [phone, setPhone] = useState('+212 600-123456');
  const [email, setEmail] = useState('johndoe@example.com');
  const [editingField, setEditingField] = useState<string | null>(null);
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  const handleSave = () => {
    setEditingField(null);
    Alert.alert('Succès', 'Profil mis à jour !');
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled) {
      setAvatarUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profil</Text>

      <TouchableOpacity onPress={pickImage}>
        <Image
          source={avatarUri ? { uri: avatarUri } : require('../../assets/images/tof.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.changePhoto}>Modifier la photo</Text>
      </TouchableOpacity>

      {/* Nom */}
      <View style={styles.row}>
        <Text style={styles.label}>Nom :</Text>
        {editingField === 'name' ? (
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        ) : (
          <Text style={styles.value}>{name}</Text>
        )}
        <TouchableOpacity onPress={() => setEditingField('name')}>
          <Ionicons name="pencil" size={20} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {/* Téléphone */}
      <View style={styles.row}>
        <Text style={styles.label}>Téléphone :</Text>
        {editingField === 'phone' ? (
          <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
        ) : (
          <Text style={styles.value}>{phone}</Text>
        )}
        <TouchableOpacity onPress={() => setEditingField('phone')}>
          <Ionicons name="pencil" size={20} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {/* Email */}
      <View style={styles.row}>
        <Text style={styles.label}>Email :</Text>
        {editingField === 'email' ? (
          <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
        ) : (
          <Text style={styles.value}>{email}</Text>
        )}
        <TouchableOpacity onPress={() => setEditingField('email')}>
          <Ionicons name="pencil" size={20} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {editingField && (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Enregistrer</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.homeButton} onPress={() => router.push('/(tabs)')}>
        <Text style={styles.homeButtonText}>Accueil</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
  },
  changePhoto: {
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  label: {
    width: 90,
    fontWeight: 'bold',
  },
  value: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 2,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#00aa88',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  homeButton: {
    marginTop: 20,
    backgroundColor: '#00aaff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
