import {useTheme} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';

/**
 * Button component
 * @param {*} param0
 * @returns
 */
export default function Button({children, color, size, onPress, ...rest}) {
	const theme = useTheme();
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={onPress}
			style={[
				theme.btn,
				theme[camelCase(color)],
				theme['btn' + upperFirst(size)],
			]}>
			<Text style={[theme.btnText, theme[camelCase(color) + 'Text']]}>
				{children}
			</Text>
		</TouchableOpacity>
	);
}

// default props
Button.defaultProps = {
	color: 'text',
};
