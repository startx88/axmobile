import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {useTheme} from '@react-navigation/native';
/**
 * Typography component
 * @param {*} param0
 * @returns
 */
export default function Typography({variant, children, style, ...rest}) {
	// theme
	const theme = useTheme();

	return (
		<Text style={[theme[variant], style]} {...rest}>
			{children}
		</Text>
	);
}

Typography.defaultProps = {
	variant: 'body1',
};

Typography.propTypes = {
	variant: PropTypes.string,
};
