import {forwardRef, useImperativeHandle, useRef} from 'react';
import {useTheme} from '@react-navigation/native';
import {
	StyleSheet,
	Modal as RNModal,
	ScrollView,
	Keyboard,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import useToggle from '../hooks/useToggle';
import Button from './Button';
import Icon from './Icon';
import Input from './Input';
import Typography from './Typography';
import Divider from './Divider';

/**
 * Modal
 * @param {*} param0
 * @returns
 */
const ModalSearch = forwardRef((props, ref) => {
	// props
	const {name, value, onChange, children, onSearch, placeholder, ...rest} =
		props;

	// toggle hook
	const {onOpen, onToggle, open, onClose} = useToggle();

	// theme
	const theme = useTheme();
	const modalRef = useRef();

	// use ref
	useImperativeHandle(ref, () => ({onOpen, onClose, onToggle}));

	return (
		<RNModal
			visible={open}
			onRequestClose={onClose}
			animationType="fade"
			onSwipe={onClose}
			propagateSwipe={true}
			ref={modalRef}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={{padding: 15, flex: 1, zIndex: 2}}>
					<View style={{marginBottom: 0}}>
						<Input
							iconEnd="search-outline"
							value={value}
							name={name}
							onChange={onChange}
							placeholder="Search keyword... and press enter"
							onSubmitEditing={onSearch}
						/>
					</View>
					<Divider />
					<View style={{flex: 1}}>{children}</View>
					<Divider />
					<View style={{alignItems: 'flex-end'}}>
						<Button size="xs" color="primary" onPress={onClose}>
							Close
						</Button>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</RNModal>
	);
});

export default ModalSearch;
