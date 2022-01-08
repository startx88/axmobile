import {useTheme} from '@react-navigation/native';
import {View} from 'react-native';

/**
 * Pagination component
 * @param {*} param0
 * @returns
 */
export default function Pagination({data, slideIndex}) {
	const theme = useTheme();
	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			{data.map((col, index) => (
				<View
					key={col.id}
					style={{
						width: slideIndex === index ? 25 : 15,
						height: 5,
						marginHorizontal: 5,
						backgroundColor:
							slideIndex === index
								? theme.colors.primary
								: theme.colors.grayLight,
						borderRadius: 10,
					}}></View>
			))}
		</View>
	);
}
