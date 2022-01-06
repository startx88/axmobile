import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';

// Auth Stack
const Stack = createNativeStackNavigator();


// screen options
const screenOptions = {
  headerShown: false
}

// export auth stack
export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={screenOptions}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
