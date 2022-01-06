import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';
import Input from '../components/Input';
import Icon from '../components/Icon'
import Modal from '../components/Modal';
import useToggle from '../hooks/useToggle';
/**
 * Onboarding screen
 * @returns
 */
export default function Splash() {
  const theme = useTheme();
  const { open, onToggle, onClose } = useToggle()
  return (
    <SafeAreaView style={[theme.screenCenter, { padding: 15 }]}>
      <Text>OnBoarding</Text>
      <ButtonGroup>
        <Button color="text">Button</Button>
        <Button color="primary">Button</Button>
        <Button color="primary-outline">Button</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button onPress={onToggle} color="secondary">Button</Button>
        <Button color="secondary-outline">Button</Button>
      </ButtonGroup>

      <Input name="name" value="Hello" iconEnd="search-outline" />
      <Modal title="Modal" visible={open} onClose={onClose}>
        <Text>Cumque euismod viverra quae arcu velit sapiente mus eaque tortor accusamus assumenda malesuada penatibus molestiae libero nostrud aspernatur. Quasi, dapibus magna imperdiet tristique posuere. Voluptatibus! Minus sagittis debitis! Integer hymenaeos, eget officia vestibulum euismod lacus? Dolorem? Curabitur quibusdam sagittis? Phasellus temporibus fames, accusamus platea! Justo curae. Nostrud deleniti, nobis eum iusto aliqua repudiandae aptent fuga arcu et, nostrum commodo facilis, facilisis exercitationem tellus vehicula sociis feugiat corporis ultrices pretium blanditiis provident mi sollicitudin exercitation netus ligula felis egestas, ipsam possimus cum tincidunt possimus aperiam amet bibendum in, facilisis sociis tenetur. Amet sociis ullamcorper laboris exercitationem debitis repudiandae, sapien praesentium sapiente. Cumque euismod viverra quae arcu velit sapiente mus eaque tortor accusamus assumenda malesuada penatibus molestiae libero nostrud aspernatur. Quasi, dapibus magna imperdiet tristique posuere. Voluptatibus! Minus sagittis debitis! Integer hymenaeos, eget officia vestibulum euismod lacus? Dolorem? Curabitur quibusdam sagittis? Phasellus temporibus fames, accusamus platea! Justo curae. Nostrud deleniti, nobis eum iusto aliqua repudiandae aptent fuga arcu et, nostrum commodo facilis, facilisis exercitationem tellus vehicula sociis feugiat corporis ultrices pretium blanditiis provident mi sollicitudin exercitation netus ligula felis egestas, ipsam possimus cum tincidunt possimus aperiam amet bibendum in, facilisis sociis tenetur. Amet sociis ullamcorper laboris exercitationem debitis repudiandae, sapien praesentium sapiente.</Text>

      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
