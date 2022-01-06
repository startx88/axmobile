import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AppTheme from '../theme';
import { Color } from '../theme/Color';
import AuthStack from './AuthStack';

// theme
const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Color
  },
  ...AppTheme(DefaultTheme)
};



// App Navigation
export default function AppNavigation() {
  return (
    <NavigationContainer theme={Theme}>
      <AuthStack />
    </NavigationContainer>
  );
}
