import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import {View, Text, Image, ScrollView} from 'react-native';
import {AppImage} from '../utility';
import Fade from '../components/Fade';

/**
 * Loading screen
 * @returns
 */
const Loading = () => {
	const theme = useTheme();

	return (
		<SafeAreaProvider>
			<ScrollView
				contentContainerStyle={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Fade>
					<Image source={AppImage.logo} />
				</Fade>
			</ScrollView>
		</SafeAreaProvider>
	);
};

export default Loading;
