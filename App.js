import 'react-native-gesture-handler';
import {useState, useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {enableFreeze} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useFonts} from 'expo-font';
import AppNavigation from './navigation';
import Splash from './screens/Splash';

enableFreeze(true);

const sleep = (time) =>
	new Promise((resolve, reject) => setTimeout(resolve, time));

/**
 * App component
 * @returns
 */
export default function App() {
	const [loading, setLoading] = useState(true);
	// fonts
	const [loaded] = useFonts({
		Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
		RobotoLight: require('./assets/fonts/Roboto-Light.ttf'),
		RobotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
		RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
		RobotoBlack: require('./assets/fonts/Roboto-Black.ttf'),
	});

	useEffect(() => {
		const sub = sleep(2000).then(() => {
			setLoading(false);
		});
		return () => {
			clearTimeout(sub);
		};
	}, []);

	if (!loaded) {
		return null;
	}

	if (loading) {
		return <Splash />;
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
