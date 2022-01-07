import {useTheme} from '@react-navigation/native';
import {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Typography from '../components/Typography';
import Icon from './Icon';
/**
 * Select component
 * @returns
 */
const Select = ({data, name, label, value, onChange, renderProps, ...rest}) => {
	const [selectOption, setSelectOption] = useState(value);
	const [open, setOpen] = useState(false);

	// on select handelr
	const onSelectHandler = (option) => {
		onChange(option);
		setSelectOption(option);
		setOpen(false);
	};

	const renderOptions = ({item}) => (
		<TouchableOpacity
			onPress={() => onSelectHandler(item)}
			style={{padding: 5}}>
			<Text>{item.title}</Text>
		</TouchableOpacity>
	);

	// theme
	const theme = useTheme();
	// toggle
	const onToggle = () => {
		setOpen(!open);
	};

	return (
		<View style={{position: 'relative', width: '100%'}}>
			<TouchableOpacity onPress={onToggle} style={[theme.input]}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}>
					{selectOption ? (
						<Typography>{selectOption[label]}</Typography>
					) : (
						<Typography variant="body1">Select {name}</Typography>
					)}
					{open ? (
						<Icon icon="chevron-up-outline" />
					) : (
						<Icon icon="chevron-down-outline" />
					)}
				</View>
			</TouchableOpacity>
			{open && (
				<View
					style={[
						{
							position: 'absolute',
							top: '100%',
							width: '100%',
							maxHeight: 300,
							backgroundColor: theme.colors.white,
							padding: 10,
							borderColor: theme.colors.borderLight,
							borderWidth: 1,
						},
					]}>
					<FlatList
						data={data}
						keyExtractor={(item, index) => index}
						renderItem={renderProps ?? renderOptions}
					/>
				</View>
			)}
		</View>
	);
};

// default props
Select.defaultProps = {
	name: 'option',
};

// export
export default Select;

const styles = StyleSheet.create({});
