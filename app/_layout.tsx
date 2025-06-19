// app/_layout.tsx

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* ✅ Stack principal avec header désactivé */}
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'violet' }, // fond pour toutes les pages
        }}
      >
        {/* Onglets */}
        <Stack.Screen name="(tabs)" />

        {/* Écran "NotFound" */}
        <Stack.Screen name="+not-found" />

        {/* Autres écrans */}
        <Stack.Screen
          name="AllRestaurants"
          options={{ title: 'Tous les restaurants' }}
        />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
