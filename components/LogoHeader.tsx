import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function LogoHeader() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.jpg')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 0,
    padding: 5,
    backgroundColor:'#D7DCE1',
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
});
