import 'react-native-gesture-handler';
import {StatusBar, StyleSheet} from 'react-native';
import {enableFreeze} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useFonts} from 'expo-font';
import AppNavigation from './navigation';

enableFreeze(true);
/**
 * App component
 * @returns
 */
export default function App() {
	// fonts
	const [loaded] = useFonts({
		Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
		RobotoLight: require('./assets/fonts/Roboto-Light.ttf'),
		RobotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
		RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
		RobotoBlack: require('./assets/fonts/Roboto-Black.ttf'),
	});

	if (!loaded) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<StatusBar animated={true} />
			<AppNavigation />
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
