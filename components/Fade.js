import { Animated } from 'react-native';
export default function Fade({ timeIn = 5000, timeOut = 2000, children }) {
	const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

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

	return <Animated.View>{children}</Animated.View>;
}
