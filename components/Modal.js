import {forwardRef, useImperativeHandle, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {
	StyleSheet,
	Modal as RNModal,
	ScrollView,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import useToggle from '../hooks/useToggle';
import Icon from './Icon';
import Typography from './Typography';

/**
 * Modal component
 * @param {*} param0
 * @returns
 */
const Modal = forwardRef(({title, children, ...rest}, ref) => {
	const {onOpen, onToggle, open, onClose} = useToggle();

	// impretive handle
	useImperativeHandle(ref, () => ({onOpen, onClose, onToggle}));

	const theme = useTheme();
	const leftLine = (
		<View
			style={[
				StyleSheet.absoluteFill,
				{
					height: 30,
					top: 10,
					width: 4,
					backgroundColor: theme.colors.primary,
					left: -15,
				},
			]}></View>
	);

	return (
		<RNModal
			visible={open}
			onRequestClose={onClose}
			transparent
			animationType="slide"
			onSwipe={onClose}
			propagateSwipe={true}>
			<View style={[theme.modal]}>
				<View style={[theme.modalContainer]}>
					<View style={[theme.modalTitle]}>
						{leftLine}
						<Typography style={[theme.subtitle, {color: theme.colors.primary}]}>
							{title}
						</Typography>
						<TouchableOpacity
							activeOpacity={0.5}
							style={{padding: 0, color: theme.colors.primary}}
							onPress={onClose}>
							<Icon icon="close" color={theme.colors.primary} />
						</TouchableOpacity>
					</View>
					<View style={[theme.modalContent]}>
						<ScrollView style={{height: 300}}>{children}</ScrollView>
					</View>
				</View>
			</View>
			<TouchableWithoutFeedback onPress={onClose}>
				<View
					style={{
						position: 'absolute',
						zIndex: 1,
						width: '100%',
						height: '100%',
						backgroundColor: theme.colors.black,
						opacity: 0.5,
					}}></View>
			</TouchableWithoutFeedback>
		</RNModal>
	);
});

// export
export default Modal;
