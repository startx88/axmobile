import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';

// theme
const AppTheme = {
  ...DefaultTheme,
};



// App Navigation
export default function AppNavigation() {
  return (
    <NavigationContainer theme={AppTheme}>
      <AuthStack />
    </NavigationContainer>
  );
}
