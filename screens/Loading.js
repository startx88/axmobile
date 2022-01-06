import React from 'react';
import { View, Text, Image } from 'react-native';
import { AppImage } from '../utility';

/**
 * Loading screen
 * @returns
 */
const Loading = () => {
	return (
		<View>
			<View>
				<Image source={AppImage.logo} />
			</View>
			<Text>Loading</Text>
		</View>
	);
};

export default Loading;
