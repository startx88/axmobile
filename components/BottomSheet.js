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
/**
 * Bottom Sheet component
 * @param {*} param0
 * @returns
 */
const BottomSheet = forwardRef(({children}, ref) => {
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
			{children}
		</RNModal>
	);
});

// export
export default BottomSheet;
