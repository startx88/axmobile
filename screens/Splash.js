import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';
import Input from '../components/Input';
/**
 * Onboarding screen
 * @returns
 */
export default function Splash() {
  const theme = useTheme();
  return (
    <SafeAreaView style={[theme.screenCenter, { padding: 15 }]}>
      <Text>OnBoarding</Text>
      <ButtonGroup>
        <Button color="text">Button</Button>
        <Button color="primary">Button</Button>
        <Button color="primary-outline">Button</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button color="secondary">Button</Button>
        <Button color="secondary-outline">Button</Button>
      </ButtonGroup>


      <Input name="name" value="Hello" iconEnd="search-outline" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
