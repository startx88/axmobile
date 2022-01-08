import {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Auth Stack
const Stack = createNativeStackNavigator();

// screen options
const screenOptions = {
	headerShown: false,
};

// export auth stack
export default function AuthStack() {
	const [isAppFirstLaunch, setIsAppFirstLaunch] = useState(null);

	useEffect(() => {
		AsyncStorage.getItem('alreadyLaunched').then((value) => {
			if (value == null) {
				AsyncStorage.setItem('alreadyLaunched', 'true');
				setIsAppFirstLaunch(true);
			} else {
				setIsAppFirstLaunch(false);
			}
		});
	}, []);

	return (
		isAppFirstLaunch !== null && (
			<Stack.Navigator screenOptions={screenOptions}>
				{isAppFirstLaunch ? (
					<>
						<Stack.Screen name="OnBoarding" component={OnBoarding} />
						<Stack.Screen name="Signin" component={Signin} />
						<Stack.Screen name="Signup" component={Signup} />
					</>
				) : (
					<>
						<Stack.Screen name="Signin" component={Signin} />
						<Stack.Screen name="Signup" component={Signup} />
					</>
				)}
			</Stack.Navigator>
		)
	);
}
