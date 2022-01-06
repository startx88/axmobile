import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Onboarding screen
 * @returns
 */
export default function Splash() {
  const theme = useTheme();
  return (
    <SafeAreaView style={[]}>
      <Text>OnBoarding</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
