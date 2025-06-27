import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  onSearch: (text: string) => void;
}

export function SearchBar({ onSearch }: Props) {
  const [input, setInput] = useState('');

  const handlePress = () => {
    onSearch(input);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Restaurants, Concerts, Activités..."
        style={styles.input}
        value={input}
        onChangeText={setInput}
        underlineColorAndroid="transparent"
        returnKeyType="search"
        onSubmitEditing={handlePress}
      />
      <TouchableOpacity onPress={handlePress} style={styles.iconContainer}>
        <Ionicons name="search" size={24} color="rgba(252, 117, 7, 1)" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(252, 117, 7, 1)',
    alignItems: 'center',
    height: 50,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  iconContainer: {
    padding: 10,
  },
});
