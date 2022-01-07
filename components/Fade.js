import {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import {useTheme} from '@react-navigation/native';
/**
 * Fade component
 * @param {*} param0
 * @returns
 */
export default function Fade({style, timeIn = 1000, timeOut = 2000, children}) {
	const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
	const theme = useTheme();

	const fadeIn = () => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: timeIn,
		});
	};

	const fadeOut = () => {
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: timeOut,
		});
	};

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: timeIn,
			useNativeDriver: true,
		}).start();
	}, [fadeIn]);

	return (
		<Animated.View
			style={[
				theme.screenCenter,
				{
					...style,
					opacity: fadeAnim, // Bind opacity to animated value
				},
			]}>
			{children}
		</Animated.View>
	);
}
